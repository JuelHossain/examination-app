import { Textarea, TextInput } from "@mantine/core";
import FormWrapper from "./FormWrapper";

const Details = ({ form }) => {
  const { getInputProps } = form;
  return (
    <FormWrapper title={"About The Exam"}>
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
    </FormWrapper>
  );
};

export default Details;
