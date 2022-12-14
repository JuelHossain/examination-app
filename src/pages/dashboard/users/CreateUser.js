import { faker } from "@faker-js/faker";
import { Button, Group, Paper, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons";
import React, { useEffect } from "react";
import { useCreateUserMutation } from "../../../features/auth/authApi";

const CreateUser = () => {
  const { getInputProps, onSubmit, values, setValues, reset } = useForm({
    initialValues: {
      name: "",
      email: "",
      admin: "false",
      password: "hello",
      exams: [],
    },
  });
  const [createUser, { isSuccess }] = useCreateUserMutation();
  const createUserHandler = (data) => {
    createUser(data);
  };
  const createRandomUser = () => {
    const name = faker.name.fullName();
    const email = faker.internet.email();
    setValues({ name, email });
  };
  useEffect(() => {
    if (isSuccess) {
      reset();
      showNotification({
        title: `${values.name} created Successfully`,
        color: "green",
        icon: <IconCheck />,
      });
    }
  }, [isSuccess]);
  return (
    <Paper
      component="form"
      onSubmit={onSubmit(createUserHandler)}
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
      <Group grow>
        <Button
          onClick={createRandomUser}
          className="bg-main-500 dark:bg-main-900 dark:text-main-200"
        >
          Create random User
        </Button>
        <Button
          className="bg-main-500 dark:bg-main-900 dark:text-main-200"
          type="submit"
        >
          Create User
        </Button>
      </Group>
    </Paper>
  );
};

export default CreateUser;
