import { ChangeEvent, KeyboardEventHandler } from "react";
import { InputStyled } from "./styles";

interface IProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const Input = (props: IProps) => {
  return <InputStyled {...props} />;
};
