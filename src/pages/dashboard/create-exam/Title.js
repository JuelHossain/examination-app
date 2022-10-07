import { ActionIcon, Group, Title, Tooltip } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { IconMinus, IconPlus } from "@tabler/icons";
import React from "react";
import { getRandomNumber } from "../../../utils/random";
import { useFormContext } from "./form-context";

const CardTitle = () => {
  const { insertListItem, removeListItem, values } = useFormContext();

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
  const RemoveQuestion = () => {
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
