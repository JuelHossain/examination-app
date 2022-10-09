import { ActionIcon, Tooltip } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconMinus } from "@tabler/icons";
import React from "react";

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
        tooltip: "bg-main-500 dark:bg-main-900 dark:text-main-200",
      }}
      label="Remove Last Question"
      withArrow
      position="left"
    >
      <ActionIcon
        variant="filled"
        onClick={removeQuestion}
        className="bg-main-500  dark:bg-main-900 dark:text-main-200"
      >
        <IconMinus />
      </ActionIcon>
    </Tooltip>
  );
};

export default RemoveQuestions;
