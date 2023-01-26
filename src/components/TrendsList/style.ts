import styled from "styled-components";
import { Color, H3 } from "ui";
import { screen } from "ui";

export const StyledMovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  width: calc(100vw - 350px);
  padding-bottom: 10px;

  color: ${Color.WHITE};

  ${screen.MD} {
    width: 100vw;
  }

  ${screen.SM} {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Error = styled(H3)`
  color: ${Color.ERROR};
`;