import styled from "styled-components";
import { screen } from "ui";

const FavoritesStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  padding-inline: 40px;
  
  ${screen.SM} {
    padding-inline: 0px;
  }
`;

const FavoritesEmpty = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export { FavoritesStyled, FavoritesEmpty };