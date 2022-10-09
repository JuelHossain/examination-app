import { TextInput } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import FormWrapper from "../FormWrapper";
import Options from "./Options";
import RemoveQuestion from "./RemoveQuestion";

const Questions = ({ form }) => {
  const { values, getInputProps } = form;
  const questions = values?.questions?.map((q, index) => {
    const n = index + 1;

    const questionProps = {
      ...getInputProps(`questions.${index}.question`),
      required: true,
      placeholder: `Question ?`,
      size: "md",
    };

    const optionProps = {
      index,
      options: q.options,
      form,
    };

    const wrapperProps = {
      key: index,
      title: `Question ${n}`,
    };

    return (
      <FormWrapper {...wrapperProps}>
        <TextInput {...questionProps} />
        <Options {...optionProps} />
        <RemoveQuestion {...optionProps} />
      </FormWrapper>
    );
  });

  return <>{questions}</>;
};

export default Questions;
