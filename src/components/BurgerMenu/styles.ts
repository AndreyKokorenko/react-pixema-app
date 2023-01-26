import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const BurgerIcon = styled(motion.div)`
  grid-area: burger;

  margin-left: 10px;

  cursor: pointer;
`;

const Absolute = styled.div`
  position: absolute;
  top: 160px;
  left: 0;

  height: calc(100vh - 165px);
`;

const Backdround = styled(motion.div)`
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

export { BurgerIcon, Absolute, Wrapper, Backdround, Container };
