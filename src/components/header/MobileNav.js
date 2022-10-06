import { Burger, Popover, Stack } from "@mantine/core";
import React, { useReducer } from "react";
import Nav from "./Nav";
import UserNav from "./userNav/UserNav";

const MobileNav = () => {
  const [opened, toggle] = useReducer((state) => !state, false);

  return (
    <Popover opened={opened} onChange={toggle}>
      <Popover.Target>
        <Burger
          opened={opened}
          onClick={toggle}
          className="sm:hidden "
          color="purple"
          size="sm"
        />
      </Popover.Target>

      <Popover.Dropdown>
        <Stack spacing={8} className="sm:hidden">
          <UserNav mobile />
          <Nav mobile />
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default MobileNav;
