import { ActionIcon, Button, Group, Popover, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons";
import React from "react";
import { useDeleteExamMutation } from "../../../features/exams/examApi";

const DeleteButton = ({ id }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const [deleteExam] = useDeleteExamMutation();

  return (
    <Popover opened={opened} onClose={toggle}>
      <Popover.Target>
        <ActionIcon
          onClick={toggle}
          className="bg-main-500 dark:bg-main-900 dark:text-main-200"
          size={"xl"}
          variant="filled"
        >
          <IconTrash />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown className="bg-main-50 dark:bg-gray-900 dark:text-main-200">
        <Stack spacing={8}>
          <p className="font-bold">Are You sure ?</p>
          <Group noWrap>
            <Button
              className="bg-green-500"
              onClick={() => {
                toggle();
              }}
              size="xs"
              color={"teal"}
            >
              No
            </Button>
            <Button
              className="bg-red-500"
              onClick={() => {
                deleteExam(id);
                toggle();
              }}
              size="xs"
              color={"red"}
            >
              Yes
            </Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default DeleteButton;
