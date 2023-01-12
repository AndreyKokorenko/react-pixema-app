import { IMovieSearch } from "types";
import { Description, MovieItem, Poster, Title, MovieLink } from "./styles";
import { SyntheticEvent } from "react";

export const MovieTile = ({ title, poster, type, year, imdbID }: IMovieSearch) => {
  const addDefaultSrc = (ev: SyntheticEvent<HTMLImageElement, Event>) => {
    ev.currentTarget.src =
      "https://encrypted-tbn0.gstatic.com/" +
      "images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU";
  };

  return (
    <MovieItem>
      <MovieLink to={`/movies/${imdbID}`}>
        <>
          <Poster src={poster} onError={addDefaultSrc} alt={`poster ${title}`} />
        </>
        <Title>{title}</Title>
        <Description>
          {type} ☉ {year}
        </Description>
      </MovieLink>
    </MovieItem>
  );
};
