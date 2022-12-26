import { LogoIcon } from "assets";
import styled from "styled-components";
import {  Media } from "ui";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr auto auto;
  grid-gap: 1rem;
  align-items: center;
  z-index: 2;
  top: 0;

  grid-area: header;
  padding: 48px 40px 0 64px;

  ${Media.MD} {
    grid-template-columns: repeat(2, auto);
    grid-template-areas:
      "logo burger"
      "search search";
    justify-content: space-between;

    padding: 20px 20px 10px;
  }
`;

const Search = styled.div`
  padding: 0 0 0 90px;
  ${Media.MD} {
    grid-area: search;
  }
`;

const LogoIconHeader = styled(LogoIcon)`
  ${Media.MD} {
    width: 150px;
    grid-area: logo;
  }
`;

export { StyledHeader, Search, LogoIconHeader };
