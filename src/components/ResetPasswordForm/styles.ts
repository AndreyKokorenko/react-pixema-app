import styled from "styled-components";
import { Color, screen } from "ui";

const Form = styled.form`
  display: flex;
  flex-grow: 1;

  ${screen.SM} {
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-top: 20px;

  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  border: none;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    filter: grayscale(0.75);
  }
`;

const Column = styled.div`
  flex-grow: 1;

  margin: 5px;
`;

const LabelText = styled.div`
  margin-block: 10px;
`;

const Error = styled.p`
  position: absolute;

  color: ${Color.ERROR};
`;

export { Form, Column, Button, LabelText, Error };
