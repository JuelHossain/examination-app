import { ActionIcon, Avatar, Group, Switch } from "@mantine/core";
import { IconTrash } from "@tabler/icons";
import React from "react";
import {
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../../features/auth/authApi";

const UserList = ({ id }) => {
  const { data: { name, email, admin } = {} } = useGetUserQuery(id);
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  return (
    <Group position="apart">
      <Group>
        <Avatar />
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </Group>
      <Group>
        <Switch
          onChange={() => updateUser({ id, patch: { admin: !admin } })}
          checked={admin}
          color={"grape"}
          size="md"
          onLabel=" ADMIN"
          offLabel="USER"
        />
        <ActionIcon
          onClick={() => {
            deleteUser(id);
          }}
          className="bg-red-500 text-red-50"
        >
          <IconTrash />
        </ActionIcon>
      </Group>
    </Group>
  );
};

export default UserList;
