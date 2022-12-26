import styled from "styled-components";
import { Color, screen } from "ui";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  padding: 40px;
  width: 574px;

  background: ${Color.DARK};
  border-radius: 10px;

  ${screen.MD} {
    width: 80vw;
  } ;
`;

const LabelText = styled.div`
  margin-bottom: 10px;

  color: ${Color.WHITE};
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

const SignUp = styled.div`
  text-align: center;

  color: ${Color.SECONDARY};
`;

const Label = styled.label`
  position: relative;

  margin-bottom: 40px;
`;

const Error = styled.p`
  position: absolute;
  top: 85px;

  color: ${Color.ERROR};
`;

export { Form, Button, Label, SignUp, Error, LabelText };
