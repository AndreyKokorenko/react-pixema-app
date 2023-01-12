import { adaptedIMovie } from "mappers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI } from "services";
import { IMovie } from "types";

interface MoviesState {
  movies: { [title: string]: IMovie };
  isLoading: boolean;
  error: null | string;
}

const initialState: MoviesState = {
  movies: {},
  isLoading: false,
  error: null,
};

const fetchMovies = createAsyncThunk<IMovie, string, { rejectValue: string }>(
  "movies/fetchMovies",
  async (title: string, { rejectWithValue }) => {
    try {
      const response = await movieAPI.getByTitle(title);
      return adaptedIMovie(response);
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload, meta }) => {
      state.isLoading = false;
      state.movies[meta.arg] = payload;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error";
    });
  },
});

export default moviesSlice.reducer;

export { fetchMovies };
