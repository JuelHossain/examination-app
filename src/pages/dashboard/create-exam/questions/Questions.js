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
        spacing={10}
        key={q.key}
        className="flex-1 border shadow-sm p-2 rounded-md basis-60 relative"
      >
        <p className="text-center font-semibold text-lg bg-main-100 py-1 text-main-500 shadow-sm border rounded-md">
          Question {n}
        </p>
        <TextInput
          {...getInputProps(`questions.${index}.question`)}
          required
          placeholder={`Question ?`}
          withAsterisk
          size="md"
        />

        <Options index={index} options={q.options} />

        <RemoveQuestion index={index} />
      </Stack>
    );
  });

  return <>{questions}</>;
};

export default Questions;
