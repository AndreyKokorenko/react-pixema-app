import styled from "styled-components";
import { Color } from "ui";

const InputStyled = styled.input`
  width: 100%;
  padding: 16px 20px;

  background: ${Color.BACKGROUND_PRIMARY_DARK};
  border-radius: 10px;
  border: none;
  color: ${Color.WHITE};
`;

export { InputStyled };
