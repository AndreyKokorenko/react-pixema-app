import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice";
import userReducer from "./features/userSlice";
import movieDetailsReducer from "./features/moviesDetailsSlice";
import favoritesReducer from "./features/favoritesSlice";
import moviesSearchReducer from "./features/movieSearchSlice";
import trendsReducer from "./features/trendsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    user: userReducer,
    movieDetails: movieDetailsReducer,
    favorites: favoritesReducer,
    moviesSearch: moviesSearchReducer,
    trends: trendsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
