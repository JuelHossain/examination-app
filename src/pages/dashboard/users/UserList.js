import { Avatar, Group, Switch } from "@mantine/core";
import React from "react";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../../features/auth/authApi";

const UserList = ({ id }) => {
  const { data: { name, email, admin } = {} } = useGetUserQuery(id);
  const [updateUser] = useUpdateUserMutation();

  return (
    <Group position="apart">
      <Group>
        <Avatar />
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </Group>
      <Switch
        onChange={() => updateUser({ id, patch: { admin: !admin } })}
        checked={admin}
        color={"grape"}
        size="md"
        onLabel=" ADMIN"
        offLabel="USER"
      />
    </Group>
  );
};

export default UserList;
