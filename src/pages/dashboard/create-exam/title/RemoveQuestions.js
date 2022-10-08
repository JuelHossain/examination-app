import { ActionIcon, Group, Title, Tooltip } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { IconListCheck, IconMinus, IconPlus } from "@tabler/icons";
import React from "react";
import { getRandomNumber } from "../../../../utils/random";

const RemoveQuestions = ({ form }) => {
     const { removeListItem, values } = form;
      const removeQuestion = () => {
        if (values.questions.length > 2) {
          removeListItem("questions", values.questions.length - 1);
        } else {
          showNotification({
            title: "Your Exam Needs At least 2 Question",
            color: "red",
          });
        }
      };
  return (
    <Tooltip
      classNames={{
        tooltip: "bg-main-500",
      }}
      label="Remove Last Question"
      withArrow
      position="left"
    >
      <ActionIcon
        variant="filled"
        onClick={removeQuestion}
        className="bg-main-500"
      >
        <IconMinus />
      </ActionIcon>
    </Tooltip>
  );
};

export default RemoveQuestions;
