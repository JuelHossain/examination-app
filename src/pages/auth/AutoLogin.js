import { Button, Group, LoadingOverlay } from "@mantine/core";
import React from "react";
import { useGetUsersQuery } from "../../features/auth/authApi";
import { getRandomNumber } from "../../utils/random";

const AutoLogin = ({ setValues }) => {
  const { data: users, isLoading: userLoading } = useGetUsersQuery();
  const { data: admins, isLoading: adminLoading } = useGetUsersQuery(true);
  const password = "hello";
  const loginAsAdmin = () => {
    const { email } = admins?.[getRandomNumber(0, admins.length - 1)];
    setValues({ email, password });
  };
  const loginAsUser = () => {
    const { email } = users?.[getRandomNumber(0, users.length - 1)];
    setValues({ email, password });
  };
  return (
    <>
      <LoadingOverlay visible={adminLoading || userLoading} />
      <Group grow>
        <Button
          onClick={loginAsAdmin}
          className="bg-main-500  dark:text-main-400 dark:bg-main-900/50"
        >
          Login As Admin
        </Button>
        <Button
          onClick={loginAsUser}
          className="bg-main-500  dark:text-main-400 dark:bg-main-900/50"
        >
          Login As User
        </Button>
      </Group>
    </>
  );
};

export default AutoLogin;
