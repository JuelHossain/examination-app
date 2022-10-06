import {
  ActionIcon,
  Card,
  Group,
  ScrollArea,
  SimpleGrid,
  Stack,
  Textarea,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconMinus, IconPlus } from "@tabler/icons";
import React, { useEffect, useState } from "react";

const CreateExam = () => {
  const [totalQ, setTotalQ] = useState(3);
  const [questions, setQuestions] = useState(null);
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
  useEffect(() => {
    setQuestions(
      Object.keys([...Array(totalQ)]).map((q) => {
        const i = +q + 1;
        return (
          <Stack
            key={i}
            className="flex-1 border shadow-sm p-2 rounded-md basis-60 relative"
          >
            <TextInput
              label={`Question ${i}`}
              placeholder="Question"
              withAsterisk
              size="md"
            />

            <Stack spacing={4}>
              <p className="font-semibold">Question {i} Options </p>
              <Stack>
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
          </Stack>
        );
      })
    );
  }, [totalQ]);

  return (
    <Card component="form" withBorder shadow={"xs"} className="flex-1 bg-main-50/20">
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
      <ScrollArea
        classNames={{
          thumb: "bg-main-500 ",
          scrollbar: "bg-main-100",
        }}
        scrollbarSize={15}
        offsetScrollbars
        className="h-full "
      >
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: 1024, cols: 1, spacing: "sm" }]}
          className="mb-10"
          align={"stretch"}
        >
          <Stack className="flex-1 border shadow-sm p-2 rounded-md basis-60">
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
          </Stack>
          {questions}
        </SimpleGrid>
      </ScrollArea>
    </Card>
  );
};

export default CreateExam;
