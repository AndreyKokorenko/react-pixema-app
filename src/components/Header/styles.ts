import { LogoIcon } from "assets";
import styled from "styled-components";
import { Color, screen } from "ui";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;

  display: grid;
  grid-template-columns: 200px 1fr auto auto;
  grid-gap: 1rem;
  align-items: center;
  grid-area: header;

  margin-bottom: 56px;
  padding: 48px 63px 10px;

  background-color: ${Color.BACKGROUND_PRIMARY};

  ${screen.MD} {
    grid-template-columns: repeat(2, auto);
    grid-template-areas:
      "logo burger"
      "search search";
    justify-content: space-between;

    padding: 20px 20px 10px;
  }
`;

const LogoIconHeader = styled(LogoIcon)`
  ${screen.MD} {
    grid-area: logo;

    width: 150px;
  }
`;

const Search = styled.div`
  ${screen.MD} {
    grid-area: search;
  }
`;

export { Wrapper, LogoIconHeader, Search };
