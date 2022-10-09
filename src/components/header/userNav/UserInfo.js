import { Group, HoverCard } from "@mantine/core";
import { IconUser, IconUserCheck } from "@tabler/icons";
import { useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { selectUser } from "../../../features/auth/authSelector";
import { UserInfoAction } from "./userCard";
export default function UserInfo({ author }) {
  const { name, admin } = useSelector(selectUser);
  const navigate = useNavigate();
  const match = useMatch("/user");

  return (
    <HoverCard width={280} shadow="md">
      <HoverCard.Target>
        <Group
          position="right"
          noWrap
          spacing={6}
          className={`py-1 px-3 rounded cursor-pointer flex-1 flex-row-reverse sm:flex-row  ${
            match
              ? "bg-main-500 text-main-50 dark:bg-main-900 dark:text-main-200"
              : "bg-main-200 text-main-500  dark:text-main-400 dark:bg-main-900/50 "
          }`}
        >
          <p className="font-semibold truncate  capitalize">{author || name}</p>
          {admin || author ? (
            <IconUserCheck size={18} />
          ) : (
            <IconUser size={18} />
          )}
        </Group>
      </HoverCard.Target>
      <HoverCard.Dropdown className="p-0">
        <UserInfoAction />
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
