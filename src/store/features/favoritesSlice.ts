import { IMovieSearch } from "types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavoritesState {
  favorites: IMovieSearch[];
}

const initialState: IFavoritesState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavotires(state, { payload }: PayloadAction<IMovieSearch>) {
      const result = state.favorites.find((movie) => movie.imdbID === payload.imdbID);
      if (!result) state.favorites.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorite(state, { payload }: PayloadAction<string>) {
      state.favorites = state.favorites.filter((movie) => {
        return movie.imdbID !== payload;
      });
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavotires, removeFavorite } = favoritesSlice.actions;
