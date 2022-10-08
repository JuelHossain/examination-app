import { Button, Paper, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconCircleCheck } from "@tabler/icons";
import React, { useEffect } from "react";
import { useCreateUserMutation } from "../../../features/auth/authApi";

const CreateUser = () => {
  const { getInputProps, onSubmit, values } = useForm({
    initialValues: {
      name: "",
      email: "",
      admin: "false",
      password: "hello",
    },
  });
  const [createUser, { isSuccess }] = useCreateUserMutation();
  const submitHandler = (data) => {
    createUser(data);
  };
  useEffect(() => {
    if (isSuccess) {
      showNotification({
        title: `${values.name} Created Successfully`,
        color: "teal",
        icon: <IconCircleCheck />,
      });
    }
  }, [isSuccess]);
  return (
    <Paper
      component="form"
      onSubmit={onSubmit(submitHandler)}
      withBorder
      shadow={"sm"}
      className=" p-4 space-y-2 flex-1 basis-60 flex flex-col justify-center"
    >
      <p className="text-xl font-bold text-gray-600 text-center">
        Create A User
      </p>
      <TextInput
        {...getInputProps("name")}
        required
        placeholder="Name of the user"
      />
      <TextInput
        {...getInputProps("email")}
        required
        type={"email"}
        placeholder="Email of the user"
      />
      <PasswordInput
        required
        placeholder="Password is hello"
        {...getInputProps("password")}
        readOnly
      />
      <Button className="bg-main-500" type="submit" fullWidth>
        Create User
      </Button>
    </Paper>
  );
};

export default CreateUser;
