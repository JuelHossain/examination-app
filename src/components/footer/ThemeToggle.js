import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" >
      <ActionIcon
        onClick={() => toggleColorScheme()}
       className="bg-main-200 text-main-900 dark:bg-main-900/50 dark:text-main-200 rounded-full hover:scale-125 duration-300 "
      >
        {colorScheme === "dark" ? (
          <IconSun size={18} />
        ) : (
          <IconMoonStars size={18} />
        )}
      </ActionIcon>
    </Group>
  );
}
