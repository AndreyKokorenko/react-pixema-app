import { useEffect } from "react";
import { MovieTile } from "components";
import { fetchTrends } from "store/features/";
import { useAppDispatch, useAppSelector } from "store";
import { getTrends } from "store/selectors";
import { IMovieSearch } from "types";
import { StyledMovieList, Error } from "./style";

interface IProps {
  value: string;
}

export const TrendsList = ({ value }: IProps) => {
  const dispatch = useAppDispatch();
  const { trends, isError } = useAppSelector(getTrends);

  useEffect(() => {
    dispatch(fetchTrends(value));
  }, [dispatch, value]);

  if (isError) {
    return <Error> Sorry :( </Error>;
  }

  return (
    <StyledMovieList>
      {trends.map(({ year, title, poster, imdbID, type }: IMovieSearch) => (
        <MovieTile
          type={type}
          key={imdbID}
          year={year}
          title={title}
          poster={poster}
          imdbID={imdbID}
        />
      ))}
    </StyledMovieList>
  );
};
