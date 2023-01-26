import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { Button, Form, SignUp, Error, Label, LabelText } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input, Modal } from "components";
import { useState } from "react";
import { fetchSignInUser, useAppDispatch } from "store";

export type SignInValues = {
  email: string;
  password: string;
};

export enum SignInValuesKeys {
  EMAIL = "email",
  PASSWORD = "password",
}

export const SignInForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isOpen, toggleModal] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<SignInValues>({
    defaultValues: { email: "", password: "" },
  });

  const userInfo = JSON.parse(localStorage.getItem("userInfo")!);

  if (userInfo) {
    userInfo.isAuth = true;
  }

  const onSubmit: SubmitHandler<SignInValues> = (userInfo) => {
    dispatch(fetchSignInUser(userInfo))
      .unwrap()
      .then(() => {
        localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigate(ROUTE.HOME);
      })
      .catch((err) => {
        setErrorMessage(err);
        toggleModal(true);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
      {isOpen && <Modal toggleModal={toggleModal} message={errorMessage} />}
    </>
  );
};
