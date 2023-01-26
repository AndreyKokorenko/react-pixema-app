import { MovieList } from "./styles";
import { useWindowSize } from "hooks";
import { breakpoint } from "ui";
import { IMovieSearch } from "types";
import { MovieTile } from "components";

interface IProps {
  movies: IMovieSearch[];
}

export const MainMovies = ({ movies }: IProps) => {
  const { width } = useWindowSize();
  return (
    <MovieList>
      {width && width > breakpoint.SM
        ? movies?.map((movie: IMovieSearch) => {
            return <MovieTile key={movie.imdbID} {...movie} />;
          })
        : movies?.map((movie: IMovieSearch) => {
            return <MovieTile key={movie.imdbID} {...movie} />;
          })}
    </MovieList>
  );
};
