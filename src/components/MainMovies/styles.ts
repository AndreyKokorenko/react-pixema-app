import styled from "styled-components";
import { screen } from "ui";

const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  width: calc(100vw - 350px);
  padding-bottom: 10px;

  ${screen.MD} {
    width: 100vw;
  }
  ${screen.SM} {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  } ;
`;

export { MovieList };
