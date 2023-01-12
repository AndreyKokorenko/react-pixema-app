import styled from "styled-components";
import { Color, screen } from "ui";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 40px;
  width: 574px;
  margin-top: 20px;

  background: ${Color.BACKGROUND_PRIMARY};
  border-radius: 10px;

  ${screen.MD} {
    width: 80vw;
  } ;
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

const LabelText = styled.div`
  margin-bottom: 10px;
`;

const SignIn = styled.div`
  text-align: center;
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

export { Form, Button, Label, SignIn, Error, LabelText, Wrapper };
