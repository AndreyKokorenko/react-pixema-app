import styled from "styled-components";
import { Color, screen } from "ui";

const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: calc(100vw - 350px);
  padding-bottom: 10px;

  ${screen.MD} {
    justify-content: center;
  } ;
`;

const Error = styled.h4`
  color: ${Color.ERROR};
`;

export { MovieList, Error };
