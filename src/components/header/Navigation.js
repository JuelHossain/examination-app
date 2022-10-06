import { Group } from "@mantine/core";
import React from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import UserNav from "./userNav/UserNav";

const Navigation = () => {
  return (
    <Group position="apart" noWrap className="container mx-auto px-5">
      <Logo />
      <Nav />
      <UserNav />
      <MobileNav />
    </Group>
  );
};

export default Navigation;
