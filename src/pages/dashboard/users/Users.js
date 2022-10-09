import { Card, Group, LoadingOverlay, ScrollArea, Stack } from "@mantine/core";
import React from "react";
import CreateUser from "./CreateUser";
import ManageAdmin from "./ManageAdmin";
import ManageUser from "./ManageUser";
const Users = () => {
  return (
    <Card withBorder shadow={"xs"} className="flex-1 flex gap-4 items-start">
      <LoadingOverlay />
      <ScrollArea
        classNames={{
          thumb: "bg-main-500 ",
          scrollbar: "bg-main-100 dark:bg-main-900/50",
        }}
        scrollbarSize={15}
        className="h-full w-full "
      >
        <Group className="flex-1 items-start">
          <Group className="flex-1 items-stretch basis-80">
            <CreateUser />
          </Group>
          <Stack className="flex-1 items-stretch basis-80">
            <ManageUser />
            <ManageAdmin />
          </Stack>
        </Group>
      </ScrollArea>
    </Card>
  );
};

export default Users;
