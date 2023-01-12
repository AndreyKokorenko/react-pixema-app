import styled from "styled-components";
import { Color, H3, screen } from "ui";

const Title = styled(H3)`
  margin-bottom: 20px;

  color: ${Color.WHITE};
`;

const LabelText = styled.div`
  margin-bottom: 10px;
`;

const Form = styled.form`
  position: sticky;
  top: 100px;
  right: 0;

  display: flex;
  flex-direction: column;

  padding-inline: 40px;
  padding-top: 30px;
  width: 320px;
  height: calc(100vh - 155px);

  ${screen.MD} {
    position: fixed;

    height: calc(100vh - 120px);

    background-color: ${Color.BACKGROUND_PRIMARY};
  } ;
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-block: 20px;

  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  border: none;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    filter: grayscale(0.75);
  }
`;

const DeleteButton = styled(Button)`
  background-color: ${Color.GRAPHITE};
`;

export const customStyles: any = {
  control: () => ({
    display: "flex",

    width: "100%",
    marginBottom: "45px",
    padding: "7px",

    textAlign: "center",

    background: Color.BACKGROUND_PRIMARY_DARK,
    color: Color.WHITE,
    borderRadius: "10px",

    cursor: "pointer",
  }),

  indicatorSeparator: () => ({
    width: 0,
  }),

  menuList: () => ({
    padding: "7px",

    background: Color.BACKGROUND_PRIMARY_DARK,
  }),
};

const SignUp = styled.div`
  text-align: center;
`;

const Label = styled.label`
  margin-bottom: 20px;
`;

const Error = styled.p`
  color: ${Color.ERROR};
`;

export { Form, Button, DeleteButton, Title, Label, SignUp, Error, LabelText };
