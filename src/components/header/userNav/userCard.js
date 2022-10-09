import { faker } from "@faker-js/faker";
import { Avatar, Button, Paper, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../../features/auth/authSelector";

export function UserInfoAction({ info }) {
  const { name, email, admin } = useSelector(selectUser);
  const img = faker.image.avatar();
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={img} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        {name}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {email} • {admin ? "Admin" : "User"}
      </Text>
      <Button
        component={Link}
        to="/dashboard"
        variant="default"
        fullWidth
        mt="md"
      >
        Dashboard
      </Button>
    </Paper>
  );
}
