import {
  Box,
  Button,
  Card,
  Notification,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconX } from "@tabler/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authApi } from "../../features/auth/authApi";
import AutoLogin from "./AutoLogin";
export default function Login() {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { getInputProps, onSubmit, setValues } = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length > 4 ? null : "Minimum five Character Needed",
    },
  });

  const submitHandler = async (values) => {
    const { error } = await dispatch(
      authApi.endpoints.login.initiate(JSON.stringify(values), {
        forceRefetch: true,
      })
    );
    if (error) {
      setError(error.data);
      setTimeout(() => setError(null), 10000);
    }
  };
  return (
    <Box className="h-screen flex justify-center items-center flex-col">
      <Card>
        <Title align="center" className="font-black text-main-500">
          Please Login!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Only registered student can login and participate in exams
        </Text>
      </Card>
      <Card
        component="form"
        withBorder
        shadow={"sm"}
        className="max-w-sm w-full space-y-4 relative"
        onSubmit={onSubmit(submitHandler)}
      >
        <TextInput
          {...getInputProps("email")}
          label="Email"
          placeholder="you@provider.com"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          {...getInputProps("password")}
        />
        {error && (
          <Notification
            classNames={{
              root: "py-1 px-2",
              icon: "w-5 h-5",
            }}
            icon={<IconX size={12} />}
            color={"red"}
            title={error}
            onClose={() => setError(null)}
          ></Notification>
        )}
        <Button fullWidth mt="xl" type="submit" className="bg-main-500">
          Sign in
        </Button>
        <AutoLogin setValues={setValues} />
      </Card>
    </Box>
  );
}
