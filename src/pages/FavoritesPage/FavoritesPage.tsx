import { EmptyFavoritesIcon } from "assets";
import { MovieTile } from "components";
import { useAppSelector, getFavorites } from "store";
import { FavoritesStyled, FavoritesEmpty } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);

  return (
    <>
      {favorites.length === 0 && (
        <FavoritesEmpty>
          <EmptyFavoritesIcon />
        </FavoritesEmpty>
      )}
      {favorites && favorites.length > 0 && (
        <FavoritesStyled>
          {favorites.map((movie) => {
            return <MovieTile key={movie.imdbID} {...movie} />;
          })}
        </FavoritesStyled>
      )}
    </>
  );
};
