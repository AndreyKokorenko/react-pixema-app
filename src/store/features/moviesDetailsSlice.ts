import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adaptedIMovieDetails } from "mappers";
import { movieAPI } from "services";
import { IMovieDetails } from "types";

export const fetchMovieByDetails = createAsyncThunk<IMovieDetails, string>(
  "movieDetails/fetchMovieByDetails",
  async (imdbID) => {
    return await movieAPI.getDetailsByID(imdbID).then((data) => adaptedIMovieDetails(data));
  }
);

interface IDetailsMovieState {
  isLoading: boolean;
  error: null;
  details: IMovieDetails | null;
}

const initialState: IDetailsMovieState = {
  isLoading: false,
  error: null,
  details: null,
};

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovieByDetails.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchMovieByDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      state.details = payload;
    });
    builder.addCase(fetchMovieByDetails.rejected, (state) => {
      state.isLoading = false;
      state.error = null;
    });
  },
});

export default movieDetailsSlice.reducer;
