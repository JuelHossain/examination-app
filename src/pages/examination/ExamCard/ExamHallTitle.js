import { Stack, Text } from "@mantine/core";
import React from "react";

const ExamHallTitle = ({ exam }) => {
  const { title, description } = exam;
  return (
    <Stack spacing={5} className={"px-20"}>
      <Text className="text-center text-2xl font-bold text-main-500">
        Welcome To The {title}
      </Text>
      <Text className="text-center  font-bold text-gray-500">
        Welcome To The {description}
      </Text>
    </Stack>
  );
};

export default ExamHallTitle;
