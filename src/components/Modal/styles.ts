import styled from "styled-components";
import { Color, H3 } from "ui";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;

  padding: 40px;

  border-radius: 20px;
  background-color: ${Color.BACKGROUND_PRIMARY_DARK};

  transform: translate(-50%, -50%);
`;

const Title = styled(H3)`
  margin-bottom: 20px;

  color: ${Color.SECONDARY};
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-bottom: 32px;

  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  border: none;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    filter: grayscale(0.75);
  }
`;

const BlurWrapper = styled.div`
  position: absolute;
  top: 0;

  height: 100vh;
  width: 100vw;

  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.1);
`;

export { Container, Title, Button, BlurWrapper };
