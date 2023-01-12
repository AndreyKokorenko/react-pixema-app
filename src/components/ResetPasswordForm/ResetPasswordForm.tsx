import { Input, Modal } from "components";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector, getUserInfo, useAppDispatch, updateUserPassword } from "store";
import { Form, Column, Button, LabelText, Error } from "./styles";

export const ResetPasswordForm = () => {
  const { email } = useAppSelector(getUserInfo);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isOpen, toggleModal] = useState(false);

  type PasswordValues = {
    newPassword: string;
    currentPassword: string;
    repeatPassword: string;
  };

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<PasswordValues>({
    defaultValues: {
      newPassword: "",
      currentPassword: "",
      repeatPassword: "",
    },
  });

  const onSubmit: SubmitHandler<PasswordValues> = ({
    repeatPassword,
    newPassword,
    currentPassword,
  }) => {
    if (newPassword === repeatPassword) {
      dispatch(
        updateUserPassword({
          email: email,
          newPassword: newPassword,
          currentPassword: currentPassword,
        })
      )
        .unwrap()
        .then(() => {
          setErrorMessage("Success!");
          toggleModal(true);
        })
        .catch((err) => {
          setErrorMessage(err);
          toggleModal(true);
        })
        .finally(() => {
          reset();
        });
    } else {
      setErrorMessage("Password inputs must be the same!");
      toggleModal(true);
    }
  };

  const validateRules = {
    newPassword: {
      requared: "Password is requared!",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
      maxLength: {
        value: 20,
        message: "Password must be at most 20 characters",
      },
    },
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Column>
        <LabelText> Current password:</LabelText>
        <Controller
          name={"currentPassword"}
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Input type={"password"} onChange={onChange} value={value} />;
          }}
        />
      </Column>
      <Column>
        <LabelText> New password:</LabelText>
        <Controller
          name={"newPassword"}
          rules={validateRules.newPassword}
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Input type={"password"} onChange={onChange} value={value} />;
          }}
        />
        {errors.newPassword && <Error>{errors.newPassword.message}</Error>}
        <LabelText> Repeat password:</LabelText>
        <Controller
          name={"repeatPassword"}
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Input type={"password"} onChange={onChange} value={value} />;
          }}
        />
        <Button type="submit"> submit </Button>
      </Column>
      {isOpen && <Modal toggleModal={toggleModal} message={errorMessage} />}
    </Form>
  );
};
