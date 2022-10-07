import { Checkbox, Group, SimpleGrid, Stack, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import getRandomInt from "../../../utils/randomNumber";

const Question = ({ i, setForm }) => {
  const key = `question${i}`;
  const options = ["A", "B", "C", "D"];
  const [correct, setCorrect] = useState("");
  useEffect(() => {
    const options = ["A", "B", "C", "D"];
    const random = getRandomInt(0, options.length - 1);
    setCorrect(options[random]);
  }, [correct]);

  useEffect(() => {
    if (correct) {
      setForm((form) => ({
        ...form,
        [key]: {
          ...form[key],
          answer: correct,
        },
      }));
    }
  }, [correct, setForm, key]);
  return (
    <Stack
      key={i}
      className="flex-1 border shadow-sm p-2 rounded-md basis-60 relative"
    >
      <TextInput
        required
        onChange={(e) => {
          const value = e.target.value;
          setForm((form) => ({
            ...form,
            [key]: {
              ...form[key],
              question: value,
            },
          }));
        }}
        label={`Question ${i}`}
        placeholder="Question"
        withAsterisk
        size="md"
      />

      <Stack spacing={4}>
        <Group position="apart">
          <p className="font-semibold">Question {i} Options </p>
        </Group>

        <SimpleGrid cols={2} spacing={10}>
          {options.map((option) => {
            return (
              <TextInput
                rightSection={
                  <Checkbox
                    color={"violet"}
                    checked={option === correct}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      if (checked) {
                        setCorrect(option);
                      }
                    }}
                  />
                }
                required
                onChange={(e) => {
                  const value = e.target.value;
                  setForm((form) => ({
                    ...form,
                    [key]: {
                      ...form[key],
                      options: {
                        ...form[key].options,
                        [option]: value,
                      },
                    },
                  }));
                }}
                key={option}
                placeholder={`Option ${option}`}
              />
            );
          })}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default Question;
