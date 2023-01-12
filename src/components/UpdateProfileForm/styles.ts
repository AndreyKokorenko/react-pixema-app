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
  width: 200px;
  padding: 16px;
  margin-inline: 20px;

  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  border: none;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    filter: grayscale(0.75);
  }

  ${screen.SM} {
    width: 100%;
    margin: 10px 0 10px;
  }
`;

const LabelText = styled.div`
  padding-block: 16px;
  margin-right: 10px;
`;

const Error = styled.p`
  color: ${Color.ERROR};
`;

export { Form, Button, LabelText, Error };
