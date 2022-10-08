import { LoadingOverlay, Paper, ScrollArea } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../../../features/auth/authApi";
import { selectUser } from "../../../features/auth/authSelector";
import UserList from "./UserList";

const ManageAdmin = () => {
  const { data, isLoading } = useGetUsersQuery('admin');
  const { email } = useSelector(selectUser);

  return (
    <Paper withBorder shadow={"sm"} className=" p-4 space-y-2 flex-1 basis-60">
      <LoadingOverlay visible={isLoading} />
      <p className="text-xl font-bold text-gray-600 text-center">
        Manage Admins
      </p>
      <ScrollArea
        classNames={{
          thumb: "bg-main-500 ",
          scrollbar: "bg-main-100",
        }}
        scrollbarSize={15}
        className="h-40 "
        offsetScrollbars
      >
        {data?.map(
          (user) =>
            user.email !== email && <UserList key={user._id} id={user._id} />
        )}
      </ScrollArea>
    </Paper>
  );
};

export default ManageAdmin;
