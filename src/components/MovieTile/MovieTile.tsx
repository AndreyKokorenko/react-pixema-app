import { IMovieSearch } from "types";
import {
  Description,
  MovieItem,
  Poster,
  Title,
  MovieTrendsIcon,
  MovieLink,
  MovieFavoritIcon,
} from "./styles";
import { motion } from "framer-motion";
import { useAppSelector, getTrends, getFavorites } from "store";
import { SyntheticEvent } from "react";

export const MovieTile = ({ title, poster, type, year, imdbID }: IMovieSearch) => {
  const { trends } = useAppSelector(getTrends);
  const { favorites } = useAppSelector(getFavorites);

  const isTrends = trends.find((trendMovie) => trendMovie.imdbID === imdbID);
  const isFavorites = favorites.find((favoritMovie) => favoritMovie.imdbID === imdbID);

  const addDefaultSrc = (ev: SyntheticEvent<HTMLImageElement, Event>) => {
    ev.currentTarget.src =
      "https://encrypted-tbn0.gstatic.com/" +
      "images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU";
  };

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MovieItem>
        <MovieLink to={`/movies/${imdbID}`}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <>
              {isTrends && <MovieTrendsIcon />}
              {isFavorites && <MovieFavoritIcon />}
              <Poster src={poster} onError={addDefaultSrc} alt={`poster ${title}`} />
            </>
          </motion.div>
          <Title>{title}</Title>
          <Description>
            {type} ☉ {year}
          </Description>
        </MovieLink>
      </MovieItem>
    </motion.div>
  );
};
