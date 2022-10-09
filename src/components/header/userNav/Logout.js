import { ActionIcon } from "@mantine/core";
import { IconLogout } from "@tabler/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../../features/auth/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <ActionIcon
      size={"lg"}
      variant="filled"
      className="bg-main-500 dark:bg-main-900 dark:text-main-200"
      onClick={() => {
        dispatch(userLoggedOut());
      }}
    >
      <IconLogout size={18} />
    </ActionIcon>
  );
};

export default Logout;
