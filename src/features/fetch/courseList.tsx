import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  collection,
  query,
  orderBy,
  getDocs,
  startAfter,
  limit,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

interface Course {
  courseTitle: string;
  courseImage: string;
  courseLevel: string;
  learningType: string;
  discountPrice: number;
}

interface FirestoreState {
  data: Course[];
  loading: boolean;
  error: string | null;
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
  hasMore: boolean;
  totalCount: number;
}

const initialState: FirestoreState = {
  data: [],
  loading: false,
  error: null,
  lastDoc: null,
  hasMore: true,
  totalCount: 0,
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

      const totalSnapshot = await getDocs(query(collection(db, collectionName)));
      const totalCount = totalSnapshot.size;

      return { documents, lastVisible, totalCount };
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
      });
  },
});

export default firestoreSlice.reducer;
