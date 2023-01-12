import { SignInValues, SignInValuesKeys, SignUpValues, SignUpValuesKeys } from "components";
import { ChangeEvent, KeyboardEventHandler } from "react";
import { UseFormRegister, ValidationRule } from "react-hook-form";
import { InputStyled } from "./styles";

interface IProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  label?: SignUpValuesKeys | SignInValuesKeys;
  register?: UseFormRegister<SignUpValues | SignInValues>;
  rules?: IRules;
}

interface IRules {
  required?: boolean;
  maxLength?: ValidationRule<number>;
  minLength?: ValidationRule<number>;
  pattern?: ValidationRule<RegExp>;
}

export const Input = ({
  placeholder,
  type,
  value,
  onChange,
  onKeyDown,
  label,
  register,
  rules,
}: IProps) => {
  return (
    <InputStyled
      onKeyDown={onKeyDown}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      {...(register && label && { ...register(label, { ...rules }) })}
    />
  );
};
