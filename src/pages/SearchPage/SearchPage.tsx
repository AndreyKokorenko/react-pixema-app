import { Filters, MovieTile, ParamsList } from "components";
import { useEffect, useState } from "react";
import {
  getMoviesSearch,
  clearMovieArray,
  fetchMoviesSearch,
  useAppDispatch,
  useAppSelector,
} from "store";
import { IMovieSearch } from "types/movieTypes";
import {
  Error,
  Wrapper,
  ErrorWrapper,
  FilterContainer,
  MovieWrapper,
  FilterButton,
  Sticky,
} from "./styles";
import { motion, AnimatePresence } from "framer-motion";
import { breakpoint } from "ui";
import { useWindowSize } from "hooks";

export const SearchPage = () => {
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();
  const { isError, moviesSearch, params, movieArray } = useAppSelector(getMoviesSearch);

  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(clearMovieArray());
    setPage(1);
    setFetching(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.title, params.filters.year, params.filters.type]);

  useEffect(() => {
    if (fetching) {
      dispatch(
        fetchMoviesSearch({
          title: params.title,
          page: page,
          filters: { year: params.filters.year, type: params.filters.type },
        })
      );

      setPage((prevState) => prevState + 1);
      setFetching(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const maxPages = +moviesSearch.totalResults / 10;

  const handleScroll = () => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        window.innerHeight <
        1 &&
      page < maxPages
    ) {
      setFetching(true);
    }
  };

  if (isError) {
    return (
      <>
        <ErrorWrapper>
          <ParamsList />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
            }}
          >
            <Error>Ooopps! No results!</Error>
          </motion.div>
        </ErrorWrapper>
        <FilterContainer>
          {width && width > breakpoint.MD ? (
            <Filters />
          ) : (
            <>
              <FilterButton onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close filters" : "Open filters"}
              </FilterButton>
              <Sticky>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ x: 50, y: -180, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 50, y: -180, opacity: 0 }}
                    >
                      <Filters />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Sticky>
            </>
          )}
        </FilterContainer>
      </>
    );
  }

  return (
    <>
      <Wrapper>
        <ParamsList />
        <MovieWrapper>
          {movieArray.map(({ imdbID, title, poster, type, year }: IMovieSearch) => {
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
        </MovieWrapper>
      </Wrapper>
      <FilterContainer>
        {width && width > breakpoint.MD ? (
          <Filters />
        ) : (
          <>
            <FilterButton onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Close filters" : "Open filters"}
            </FilterButton>
            <Sticky>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ x: 50, y: -180, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, y: -180, opacity: 0 }}
                  >
                    <Filters />
                  </motion.div>
                )}
              </AnimatePresence>
            </Sticky>
          </>
        )}
      </FilterContainer>
    </>
  );
};
