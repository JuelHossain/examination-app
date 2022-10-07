import { Stack, Textarea, TextInput } from "@mantine/core";

const Details = ({ form, handleChange }) => {
  return (
    <Stack className="flex-1 border shadow-sm p-2 rounded-md basis-60">
      <TextInput
        value={form.title}
        required
        name="title"
        onChange={handleChange}
        placeholder="Name of Exam"
        label="Exam Title"
        withAsterisk
        size="md"
      />
      <Textarea
        value={form.description}
        required
        name="description"
        onChange={handleChange}
        label="Exam Description"
        placeholder="Say something about your exam"
        withAsterisk
        size="md"
      />
    </Stack>
  );
};

export default Details;
