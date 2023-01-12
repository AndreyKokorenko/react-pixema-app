import styled from "styled-components";
import { Color } from "ui";

const BurgerIcon = styled.div`
  grid-area: burger;

  cursor: pointer;
`;

const Absolute = styled.div`
  position: absolute;
  top: 160px;
  left: 0;

  height: calc(100vh - 165px);
  padding: 0px;
`;

const Backdround = styled.div`
  height: calc(100vh - 130px);

  background-color: ${Color.BACKGROUND_PRIMARY};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  width: 48px;
  margin-right: 0.3rem;

  font-size: 20px;
  line-height: 24px;

  background-color: ${Color.PRIMARY};
  border-radius: 10px;
  color: ${Color.WHITE};
`;

export { BurgerIcon, Absolute, Wrapper, Backdround };
