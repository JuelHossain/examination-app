import { Stack, Textarea, TextInput } from "@mantine/core";
import { useFormContext } from "./form-context";

const Details = () => {
  const { getInputProps } = useFormContext();
  return (
    <Stack className="flex-1 border shadow-sm p-2 rounded-md basis-60">
      <TextInput
        {...getInputProps("title")}
        required
        name="title"
        placeholder="Name of Exam"
        label="Exam Title"
        withAsterisk
        size="md"
      />
      <Textarea
        required
        {...getInputProps("description")}
        name="description"
        label="Exam Description"
        placeholder="Say something about your exam"
        withAsterisk
        size="md"
      />
    </Stack>
  );
};

export default Details;
