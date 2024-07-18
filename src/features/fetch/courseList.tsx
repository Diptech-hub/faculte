import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  collection,
  query,
  orderBy,
  getDocs,
  startAfter,
  limit,
  doc,
  getDoc,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
interface Course {
  id: string;
  courseTitle: string;
  courseImage: string;
  courseLevel: string;
  learningType: string;
  discountPrice: number;
  actualPrice: number;
  courseBranch: string;
  courseType: string;
  dateCreated: string;
  language: string;
  courseVideo: string;
  markdown: string;
}
interface FirestoreState {
  data: Course[];
  loading: boolean;
  error: string | null;
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
  hasMore: boolean;
  totalCount: number;
  selectedCourse: Course | null;
}
const initialState: FirestoreState = {
  data: [],
  loading: false,
  error: null,
  lastDoc: null,
  hasMore: true,
  totalCount: 0,
  selectedCourse: null,
};
interface FetchParams {
  collectionName: string;
  pageSize: number;
  startAfterDoc: QueryDocumentSnapshot<DocumentData> | null;
}
export const fetchFirestoreData = createAsyncThunk(
  "firestore/fetchData",
  async (
    { collectionName, pageSize, startAfterDoc }: FetchParams,
    { rejectWithValue }
  ) => {
    try {
      let q = query(
        collection(db, collectionName),
        orderBy("dateCreated"),
        limit(pageSize > 0 ? pageSize : 20)
      );
      if (startAfterDoc) {
        q = query(q, startAfter(startAfterDoc));
      }
      const snapshot = await getDocs(q);
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as unknown as Course[];
      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      const totalSnapshot = await getDocs(
        query(collection(db, collectionName))
      );
      const totalCount = totalSnapshot.size;
      return { documents, lastVisible, totalCount };
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
export const fetchCourseDetails = createAsyncThunk(
  "firestore/fetchCourseDetails",
  async (courseId: string, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "courses", courseId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Course;
      } else {
        throw new Error("No such document!");
      }
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
const firestoreSlice = createSlice({
  name: "firestore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFirestoreData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchFirestoreData.fulfilled,
        (
          state,
          action: PayloadAction<{
            documents: Course[];
            lastVisible: QueryDocumentSnapshot<DocumentData>;
            totalCount: number;
          }>
        ) => {
          state.loading = false;
          state.data = action.payload.documents;
          state.lastDoc = action.payload.lastVisible;
          state.hasMore = action.payload.documents.length > 0;
          state.totalCount = action.payload.totalCount;
        }
      )
      .addCase(fetchFirestoreData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchCourseDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchCourseDetails.fulfilled,
        (state, action: PayloadAction<Course>) => {
          state.loading = false;
          state.selectedCourse = action.payload;
        }
      )
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default firestoreSlice.reducer;
