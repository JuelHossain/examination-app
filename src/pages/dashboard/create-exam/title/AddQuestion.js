import { ActionIcon, Group, Title, Tooltip } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { IconListCheck, IconMinus, IconPlus } from "@tabler/icons";
import React from "react";
import { getRandomNumber } from "../../../../utils/random";

const AddQuestion = ({ form }) => {
     const { insertListItem,  values } = form;
      const addQuestion = () => {
        const options = ["A", "B", "C", "D"];
        if (values.questions.length >= 5) {
          showNotification({
            title: "You have added the maximum questions",
            color: "red",
          });
        } else {
          insertListItem("questions", {
            question: "",
            options: {
              A: "",
              B: "",
              C: "",
              D: "",
            },
            answer: options[getRandomNumber(0, options.length - 1)],
            key: randomId(),
          });
        }
      };
  return (
    <Tooltip
      classNames={{
        tooltip: "bg-main-500",
      }}
      label="Add Another question"
      withArrow
      position="left"
    >
      <ActionIcon
        className="bg-main-500"
        variant="filled"
        onClick={addQuestion}
      >
        <IconPlus />
      </ActionIcon>
    </Tooltip>
  );
};

export default AddQuestion;
