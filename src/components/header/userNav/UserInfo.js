import { Group } from "@mantine/core";
import { IconUser } from "@tabler/icons";
import { useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { selectUser } from "../../../features/auth/authSelector";

export default function UserInfo() {
  const { name } = useSelector(selectUser);
  const navigate = useNavigate();
  const match = useMatch("/user");

  return (
    <Group
      position="right"
      noWrap
      onClick={() => navigate("/user")}
      spacing={6}
      className={`py-1 px-3 rounded cursor-pointer flex-1 flex-row-reverse sm:flex-row  ${
        match ? "bg-main-500 text-main-50" : "bg-main-200 text-main-500"
      }`}
    >
      <p className="font-semibold  capitalize">{name}</p>
      <IconUser size={18} />
    </Group>
  );
}
