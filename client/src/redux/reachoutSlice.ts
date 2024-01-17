import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reachoutService from '../services/reachoutService';
import { Reachout, ReachoutState } from './types';

// Async thunk for fetching reachouts
export const fetchReachouts = createAsyncThunk<Reachout[], void, { rejectValue: string }>(
  'reachout/fetchReachouts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await reachoutService.getReachouts();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

const initialState: ReachoutState = {
  reachouts: [],
  loading: false,
  error: null,
};

const reachoutSlice = createSlice({
  name: 'reachout',
  initialState,
  reducers: {
    // Reducer logic here (if any)
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReachouts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReachouts.fulfilled, (state, action) => {
        state.reachouts = action.payload;
        state.loading = false;
      })
      .addCase(fetchReachouts.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error.message || 'Failed to fetch reachouts';
        }
        state.loading = false;
      });
  },
});

export default reachoutSlice.reducer;
