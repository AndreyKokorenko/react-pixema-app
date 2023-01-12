import styled from "styled-components";
import { Color, screen, H4 } from "ui";

const Error = styled(H4)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 100%;

  color: ${Color.ERROR};
`;

const ErrorWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 2;

  width: calc(100vw - 500px);

  ${screen.MD} {
    width: auto;
  }
`;

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: calc(100vw - 500px);
  padding-top: 70px;
  padding-inline: 20px;

  ${screen.MD} {
    width: auto;
  }
`;

const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FilterButton = styled.button`
  position: fixed;
  top: 150px;
  right: 5px;
  z-index: 5;

  padding: 8px;

  font-size: 16px;

  background-color: ${Color.GRAPHITE};
  color: ${Color.WHITE};
  border: 1px solid ${Color.WHITE};
  border-radius: 5px;

  cursor: pointer;

  :hover {
    filter: grayscale(0.75);
  }
`;

const FilterContainer = styled.div`
  background: ${Color.BACKGROUND_PRIMARY};
  box-shadow: ${Color.BACKGROUND_PRIMARY_DARK} 0px 29px 29px 0px;

  ${screen.MD} {
    box-shadow: none;
  }
`;

const Sticky = styled.div`
  position: fixed;
  top: 200px;
  right: 0px;

  width: 200px;
`;

export {
  Error,
  ErrorWrapper,
  FilterContainer,
  Wrapper,
  MovieWrapper,
  FilterButton,
  Sticky,
};
