import { IMovieSearch } from "types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavoritesState {
  favorites: IMovieSearch[];
}

const initialState: IFavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavotires(state, { payload }: PayloadAction<IMovieSearch>) {
      const result = state.favorites.find((movie) => movie.imdbID === payload.imdbID);
      if (!result) state.favorites.push(payload);
    },
    removeFavorite(state, { payload }: PayloadAction<string>) {
      state.favorites = state.favorites.filter((movie) => {
        return movie.imdbID !== payload;
      });
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavotires, removeFavorite } = favoritesSlice.actions;
