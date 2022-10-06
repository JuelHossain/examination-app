import { Group } from "@mantine/core";
import React from "react";
import Logout from "./Logout";
import UserInfo from "./UserInfo";

const UserNav = ({ mobile }) => {
  return (
    <Group noWrap spacing={6} className={mobile || "hidden sm:flex"}>
      <UserInfo />
      <Logout />
    </Group>
  );
};

export default UserNav;
