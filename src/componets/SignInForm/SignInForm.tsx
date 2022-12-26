import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { Button, Form, SignUp, Error, Label, LabelText } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { Input } from "componets";

export type SignInValues = {
  email: string;
  password: string;
};

export enum SignInValuesKeys {
  EMAIL = "email",
  PASSWORD = "password",
}

export const SignInForm = () => {
  const {
    formState: { errors },
    control,
  } = useForm<SignInValues>({
    defaultValues: { email: "", password: "" },
  });

  return (
    <Form>
      <Label>
        <LabelText>Email</LabelText>
        <Controller
          name={"email"}
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Input type={"text"} onChange={onChange} value={value} />;
          }}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
      </Label>
      <Label>
        <LabelText>Password</LabelText>
        <Controller
          name={"password"}
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Input type={"password"} onChange={onChange} value={value} />;
          }}
        />
        {errors.password && <Error>{errors.password.message}</Error>}
      </Label>
      <Button type="submit">Sign in</Button>
      <SignUp>
        Don’t have an account?
        <Link to={`/${ROUTE.SIGN_UP}`}> Sign up</Link>
        <br />
        <Link to={`/${ROUTE.FORGOT_PASSWORD}`}> Forgot password? </Link>
      </SignUp>
    </Form>
  );
};
