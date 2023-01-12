import { DeleteIcon } from "assets";
import { deleteFilter, FilterKeys, useAppDispatch, useAppSelector, getMoviesSearch } from "store";
import { ParamItem, Wrapper } from "./styles";

export const ParamsList = () => {
  const { params } = useAppSelector(getMoviesSearch);
  const dispatch = useAppDispatch();

  const handleClick = (filter: FilterKeys) => {
    dispatch(deleteFilter(filter));
  };
  return (
    <Wrapper>
      {Object.entries(params.filters).map((filter) => {
        return (
          <ParamItem key={filter[0]}>
            <span>{`${filter[0]}: ${filter[1]}`} </span>
            <DeleteIcon onClick={() => handleClick(filter[0] as FilterKeys)} />
          </ParamItem>
        );
      })}
    </Wrapper>
  );
};
