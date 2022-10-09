import { Group } from "@mantine/core";
import { IconUserCheck } from "@tabler/icons";
import React from "react";
import { useExamCard } from "../../../context/examCardContext";

const Author = () => {
  const { exam: { createdBy: { name } = {} } = {} } = useExamCard();
  return (
    <Group spacing={3}>
      <IconUserCheck size={14} />
      <p className="capitalize text-xs">{name}</p>
    </Group>
  );
};

export default Author;
