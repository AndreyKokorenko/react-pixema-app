import { EmptyFavoritesIcon } from "assets";
import { MovieTile } from "components";
import { useAppSelector, getFavorites } from "store";
import { FavoritesStyled, FavoritesEmpty } from "./styles";

export const FavoritesPage = () => {
	const { favorites } = useAppSelector(getFavorites);
	
  if (favorites.length === 0) {
    return (
      <FavoritesEmpty>
        <EmptyFavoritesIcon />
      </FavoritesEmpty>
    );
  } else {
    return (
      <FavoritesStyled>
        {favorites.map((movie) => {
          return <MovieTile key={movie.imdbID} {...movie} />;
        })}
      </FavoritesStyled>
    );
  }
};
