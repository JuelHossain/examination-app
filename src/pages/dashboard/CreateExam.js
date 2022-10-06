import { Card, Group, Stack, Textarea, TextInput, Title } from "@mantine/core";
import React from "react";

const CreateExam = () => {
  return (
    <Card component="form" withBorder shadow={"xs"} className="flex-1">
      <Title className="mb-4" order={4}>
        Create An Examination
      </Title>
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

        <TextInput
          label="Question 1"
          placeholder="Question"
          withAsterisk
          size="md"
        />
        <Stack spacing={4}>
          <p className="font-semibold">Question 1 Options </p>
          <Group grow>
            <TextInput placeholder="Option A" />
            <TextInput placeholder="Option B" />
          </Group>
          <Group grow>
            <TextInput placeholder="Option C" />
            <TextInput placeholder="Option D" />
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CreateExam;
