import { Input, Modal } from "components";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector, getUserInfo, useAppDispatch, updateUserEmail } from "store";
import { Form, Button, LabelText, Error } from "./styles";

interface IProps {
  toggleProfileOpen: () => void;
}

export const UpdateProfileForm = ({ toggleProfileOpen }: IProps) => {
  const { email } = useAppSelector(getUserInfo);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isOpen, toggleModal] = useState(false);

  type ProfileValues = {
    newEmail: string;
  };

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ProfileValues>({
    defaultValues: {
      newEmail: email,
    },
  });

  const onSubmit: SubmitHandler<ProfileValues> = ({ newEmail }) => {
    dispatch(
      updateUserEmail({
        newEmail,
      })
    )
      .unwrap()
      .catch((err) => {
        setErrorMessage(err);
        toggleModal(true);
      })
      .finally(() => {
        reset();
        toggleProfileOpen();
      });
  };

  const validateRules = {
    newEmail: {
      requared: "Email is requared!",
      pattern: {
        value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: "Please enter a valid email",
      },
    },
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <LabelText> Email:</LabelText>
      <Controller
        name={"newEmail"}
        control={control}
        rules={validateRules.newEmail}
        render={({ field: { onChange, value } }) => {
          return <Input type={"text"} onChange={onChange} value={value} />;
        }}
      />
      <Button type="submit"> Submit </Button>
      {errors.newEmail && <Error>{errors.newEmail.message}</Error>}
      {isOpen && <Modal toggleModal={toggleModal} message={errorMessage} />}
    </Form>
  );
};
