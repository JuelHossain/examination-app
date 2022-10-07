import { Stack, Textarea, TextInput } from "@mantine/core";
import { useFormContext } from "./form-context";

const Details = () => {
  const { getInputProps } = useFormContext();
  return (
    <Stack className="flex-1 border shadow-sm p-2 rounded-md basis-60">
      <p className="text-center font-semibold text-lg bg-main-100 py-1 text-main-500 shadow-sm border rounded-md">
        Examination Detail
      </p>
      <TextInput
        required
        {...getInputProps("title")}
        placeholder="Name of Exam"
        size="md"
      />
      <Textarea
        required
        {...getInputProps("description")}
        placeholder="Say something about your exam"
        size="md"
      />
    </Stack>
  );
};

export default Details;
