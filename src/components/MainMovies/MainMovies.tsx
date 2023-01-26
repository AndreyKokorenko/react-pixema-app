import { MovieList } from "./styles";
import { IMovieSearch } from "types";
import { MovieTile } from "components";

interface IProps {
  movies: IMovieSearch[];
}

export const MainMovies = ({ movies }: IProps) => {
  return (
    <MovieList>
      {movies?.map((movie: IMovieSearch) => {
        return <MovieTile key={movie.imdbID} {...movie} />;
      })}
    </MovieList>
  );
};
