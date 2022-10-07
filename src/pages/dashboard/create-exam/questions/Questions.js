import { Stack, TextInput } from "@mantine/core";
import { useFormContext } from "../form-context";
import Options from "./Options";
import RemoveQuestion from "./RemoveQuestion";

const Questions = () => {
  const { values, getInputProps } = useFormContext();
  const questions = values.questions.map((q, index) => {
    const n = index + 1;
    return (
      <Stack
        key={q.key}
        className="flex-1 border shadow-sm p-2 rounded-md basis-60 relative"
      >
        <TextInput
          {...getInputProps(`questions.${index}.question`)}
          required
          label={`Question ${n}`}
          placeholder="Question"
          withAsterisk
          size="md"
        />

        <Stack spacing={4}>
          <p className="font-semibold">Question {n} Options </p>
          <Options index={index} options={q.options} />
        </Stack>
        <RemoveQuestion index={index} />
      </Stack>
    );
  });

  return <>{questions}</>;
};

export default Questions;
