import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

interface Course {
  courseTitle: string;
  courseImage: string;
  courseLevel: string;
  learningType: string;
  discountPrice: number;
  // Add other fields as needed
}

interface FirestoreState {
  data: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: FirestoreState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchFirestoreData = createAsyncThunk(
  'firestore/fetchData',
  async ({ collectionName }: { collectionName: string }, { rejectWithValue }) => {
    try {
      const q = query(collection(db, collectionName), orderBy('dateCreated'));
      const snapshot = await getDocs(q);
      const documents = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      })) as unknown as Course[];

      return documents;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const firestoreSlice = createSlice({
  name: 'firestore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFirestoreData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFirestoreData.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFirestoreData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default firestoreSlice.reducer;
