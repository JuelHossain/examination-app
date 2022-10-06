import { Group } from "@mantine/core";
import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import UserNav from "./userNav/UserNav";

const DeskNav = () => {
  return (
    <Group position="apart">
      <Logo />
      <Nav />
      <UserNav />
    </Group>
  );
};

export default DeskNav;
