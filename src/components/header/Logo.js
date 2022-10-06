import { Group } from "@mantine/core";
import { IconLicense } from "@tabler/icons";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Group
      component={Link}
      to="/"
      noWrap
      spacing={5}
      className="bg-main-100 py-1 rounded-md px-2 text-main-500"
    >
      <IconLicense className="w-auto h-5 sm:h-6" />
      <p className={`text-lg font-bold truncate sm:text-xl `}>
        Examination App
      </p>
    </Group>
  );
};

export default Logo;
