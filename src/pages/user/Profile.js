import { Avatar, Group, Stack, Title } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSelector";

const Profile = () => {
  const { name, email, admin } = useSelector(selectUser);
  return (
    <Group className="flex-col-reverse sm:flex-row sm:justify-between sm:items-end">
      <Group align={"stretch"} spacing={0}>
        <Avatar size={"xl"} />
        <Stack
          spacing={0}
          className="p-3 border sm:pr-20 pr-5 bg-main-500 text-main-50"
        >
          <Title order={3} className="capitalize">
            {name}
          </Title>
          <Title order={4} className="capitalize">
            {email}
          </Title>
        </Stack>
      </Group>
      <Title
        className="border py-2 pl-4 pr-14 bg-main-500 text-main-50 "
        order={5}
      >
        {admin ? "Admin" : "User"}
      </Title>
    </Group>
  );
};

export default Profile;
