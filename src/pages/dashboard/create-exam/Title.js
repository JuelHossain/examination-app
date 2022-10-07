import { ActionIcon, Group, Title, Tooltip } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconMinus, IconPlus } from "@tabler/icons";
import React from "react";

const CardTitle = ({ totalQ, setTotalQ }) => {
  const addQuestion = () => {
    if (totalQ > 4) {
      showNotification({
        title: "You have added the maximum questions",
        color: "red",
      });
    } else {
      setTotalQ((q) => q + 1);
    }
  };
  const RemoveQuestion = () => {
    if (totalQ > 2) {
      setTotalQ((q) => q - 1);
    } else {
      showNotification({
        title: "Your Exam Needs At least 2 Question",
        color: "red",
      });
    }
  };
  return (
    <Group position="apart" className="mb-4 ">
      <Title order={4}>Create An Examination</Title>
      <Group>
        <Tooltip label="Remove Last Question" withArrow position="left">
          <ActionIcon onClick={RemoveQuestion} color="violet">
            <IconMinus />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Add Another question" withArrow position="left">
          <ActionIcon onClick={addQuestion} color="violet">
            <IconPlus />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Group>
  );
};

export default CardTitle;
