import {
  ActionIcon,
  Card,
  Group,
  Stack,
  Textarea,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import React, { useState } from "react";

const CreateExam = () => {
  const [totalQ, setTotalQ] = useState(2);
  const questions = [];
  for (let i = 1; i <= totalQ; i++) {
    questions.push(
      <>
        <TextInput
          label={`Question ${i}`}
          placeholder="Question"
          withAsterisk
          size="md"
        />
        <Stack spacing={4}>
          <p className="font-semibold">Question {i} Options </p>
          <Group grow>
            <TextInput placeholder="Option A" />
            <TextInput placeholder="Option B" />
          </Group>
          <Group grow>
            <TextInput placeholder="Option C" />
            <TextInput placeholder="Option D" />
          </Group>
        </Stack>
      </>
    );
  }
  const addQuestion = () => {
    setTotalQ((q) => q + 1);
  };
  return (
    <Card component="form" withBorder shadow={"xs"} className="flex-1">
      <Group position="apart">
        <Title className="mb-4" order={4}>
          Create An Examination
        </Title>
        <Tooltip label="Add Another question" withArrow position="left">
          <ActionIcon onClick={addQuestion}>
            <IconPlus />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Stack>
        <TextInput
          placeholder="Name of Exam"
          label="Exam Title"
          withAsterisk
          size="md"
        />
        <Textarea
          label="Exam Description"
          placeholder="Say something about your exam"
          withAsterisk
          size="md"
        />
        {questions}
      </Stack>
    </Card>
  );
};

export default CreateExam;
