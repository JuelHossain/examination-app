import { Group, Overlay, Stack } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectUser } from "../../features/auth/authSelector";
import AdminNav from "./AdminNav";
import { adminNav, userNav } from "./navs";

const Dashboard = () => {
  const { admin } = useSelector(selectUser);
  const [opened, handlers] = useDisclosure(false);
  const small = useMediaQuery("(max-width:640px)");
  const navProps = { opened, handlers, navs: admin ? adminNav : userNav };

  return (
    <Group className="h-full" spacing={"xl"} align="start">
      <AdminNav {...navProps} />
      <Stack className="flex-1 h-full justify-start relative ">
        {opened && small && (
          <Overlay onClick={handlers.toggle} className="z-10" />
        )}
        <Outlet />
      </Stack>
    </Group>
  );
};

export default Dashboard;
