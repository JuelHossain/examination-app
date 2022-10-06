import { Group, Stack } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSelector";
import Profile from "../user/Profile";
import CreateExam from "./CreateExam";
import ManageExam from "./ManageExam";

const Dashboard = () => {
  const { admin } = useSelector(selectUser);
  return (
    <Stack>
      <Profile />
      <Group grow align={"stretch"} className="flex-col sm:flex-row">
        {admin ? (
          <>
            <CreateExam />
            <ManageExam />
          </>
        ) : (
          <>
            <CreateExam />
            <ManageExam />
          </>
        )}
      </Group>
    </Stack>
  );
};

export default Dashboard;
