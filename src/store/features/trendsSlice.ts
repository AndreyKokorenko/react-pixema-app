import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { transformShortMovie } from "mappers";
import { movieAPI } from "services";
import { IMovieSearch } from "types";

interface TrendsState {
  trends: IMovieSearch[];
  isLoading: boolean;
  isError: null | string;
}

const initialState: TrendsState = {
  trends: [],
  isLoading: false,
  isError: null,
};

export const fetchTrends = createAsyncThunk<IMovieSearch[], string, { rejectValue: string }>(
  "trends/fetchTrends",
  async (year, { rejectWithValue }) => {
    try {
      const response = await movieAPI.getTrends(year);
      return transformShortMovie(response.Search);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrends.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(fetchTrends.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trends = payload;
    });
    builder.addCase(fetchTrends.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.isError = "error";
      }
    });
  },
});

export default trendsSlice.reducer;
