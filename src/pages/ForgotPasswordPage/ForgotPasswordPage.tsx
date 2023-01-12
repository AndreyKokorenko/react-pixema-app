import { Button, Form, Error, Label, LabelText, Wrapper } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input, Modal } from "components";
import { useState } from "react";
import { useAppDispatch, resetPassword } from "store";

export type SignInValues = {
  email: string;
};

export enum SignInValuesKeys {
  EMAIL = "email",
}

export const ForgotPasswordPage = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const [isOpen, toggleModal] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<SignInValues>({
    defaultValues: { email: "" },
  });

  const onSubmit: SubmitHandler<SignInValues> = ({ email }) => {
    dispatch(resetPassword({ email }))
      .unwrap()
      .then(()=>{
        setErrorMessage("Successfully. Check your mail!");
        toggleModal(true);  
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
    <Wrapper>
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
        <Button type="submit">Sign in</Button>
      </Form>
      {isOpen && <Modal toggleModal={toggleModal} message={errorMessage} />}
    </Wrapper>
  );
};
