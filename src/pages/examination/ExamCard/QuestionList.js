import { Stack, Text } from "@mantine/core";

import Options from "./Options";
const QuestionList = ({ question, form, index }) => {
  return (
    <Stack>
      <Text className="text-xl font-bold text-main-600 p-2 bg-main-100 rounded-md text-center dark:text-main-200 dark:bg-main-900">
        {question.question}?
      </Text>
      <Options options={question.options} form={form} index={index} />
    </Stack>
  );
};

export default QuestionList;
