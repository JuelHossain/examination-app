import { Box, Group } from "@mantine/core";
import { IconCopyright } from "@tabler/icons";
import ColorSelector from "../shared/ColorSelector";

import { ThemeToggle } from "./ThemeToggle";
const classes = {
  footer:
    "border-t  border-gray-100 dark:border-gray-800 xl:container mx-auto px-5",
  inner: " flex justify-between items-center py-2 flex-col sm:flex-row",
  links: "mt-2 sm:mt-0",
};

export default function AppFooter() {
  return (
    <div className={classes.footer}>
      <Box className={classes.inner}>
        <Group spacing={3}>
          <IconCopyright size={18} />
          <p className="text-sm">All Rights Reserved Examination App</p>
        </Group>
        <Group spacing={6} className={classes.links} position="right" noWrap>
          <ColorSelector />
          <ThemeToggle />
        </Group>
      </Box>
    </div>
  );
}
