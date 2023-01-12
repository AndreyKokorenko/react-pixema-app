import { useEffect } from "react";
import { Loading, MovieTile } from "components";
import { useAppDispatch, getMovies, useAppSelector, fetchMovies } from "store";
import { MovieList, Error } from "./styles";
import { IMovieSearch } from "types";

interface IProps {
  movieTitle: string;
}

export const Recommended = ({ movieTitle }: IProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies(movieTitle));
  }, [dispatch, movieTitle]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error> Sorry :( </Error>;
  }

  return (
    <MovieList>
      {movies?.[movieTitle]?.search.map(({ imdbID, title, poster, type, year }: IMovieSearch) => {
        return (
          <MovieTile
            key={imdbID}
            title={title}
            poster={poster}
            type={type}
            year={year}
            imdbID={imdbID}
          />
        );
      })}
    </MovieList>
  );
};
