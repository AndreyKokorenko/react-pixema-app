import { useEffect } from "react";
import { Loading, MovieTile } from "components";
import { useAppDispatch, getMovies, useAppSelector, fetchMovies } from "store";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import { MovieList, Error } from "./styles";
import { useWindowSize } from "hooks";
import { IMovieSearch } from "types";
import { getNumderOfSlides } from "utils";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface IProps {
  movieTitle: string;
}

export const Recommended = ({ movieTitle }: IProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, movies } = useAppSelector(getMovies);
  const { width } = useWindowSize();

  useEffect(() => {
    dispatch(fetchMovies(movieTitle));
  }, [dispatch, movieTitle]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error> Sorry :( </Error>;
  }

  return (
    <MovieList>
      <Swiper
        slidesPerView={getNumderOfSlides(width)}
        spaceBetween={0}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {movies?.[movieTitle]?.search.map(({ imdbID, title, poster, type, year }: IMovieSearch) => {
          return (
            <SwiperSlide key={imdbID}>
              <MovieTile
                key={imdbID}
                title={title}
                poster={poster}
                type={type}
                year={year}
                imdbID={imdbID}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </MovieList>
  );
};
