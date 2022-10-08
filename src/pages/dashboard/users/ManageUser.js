import { LoadingOverlay, Paper, ScrollArea } from "@mantine/core";
import React from "react";
import { useGetUsersQuery } from "../../../features/auth/authApi";
import UserList from "./UserList";

const ManageUser = () => {
  const { data, isLoading } = useGetUsersQuery();

  return (
    <Paper withBorder shadow={"sm"} className=" p-4 pr-2 space-y-2 flex-1 basis-60 ">
      <LoadingOverlay visible={isLoading} />
      <p className="text-xl font-bold text-gray-600 text-center">
        Manage Users
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
        {data?.map((user) => (
          <UserList key={user._id} id={user._id} />
        ))}
      </ScrollArea>
    </Paper>
  );
};

export default ManageUser;
