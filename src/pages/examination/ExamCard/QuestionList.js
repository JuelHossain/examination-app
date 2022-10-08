import { Stack, Text } from "@mantine/core";

import Options from "./Options";
const QuestionList = ({ question,form,index }) => {
  return (
    <Stack>
      <Text className="text-xl font-bold text-main-600 p-2 bg-main-100 rounded-md text-center">
        {question.question}?
      </Text>
      <Options options={question.options} form={form} index={index} />
    </Stack>
  );
};

export default QuestionList;
