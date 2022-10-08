import { Stack, Text } from "@mantine/core";
import React from "react";

const ExamHallTitle = ({ exam, result }) => {
  const { title, description } = exam;
  return (
    <Stack spacing={5} className={"px-20"}>
      <Text className="text-center text-2xl font-bold text-main-500">
        Welcome To The {title}
      </Text>
      <Text className="text-center  font-bold text-gray-500">
        {description}
      </Text>
      {result && (
        <p className="text-center  font-bold text-green-500 bg-green-100 py-2 mb-2 rounded-md">
          Congrats!, You Have Already Participated in this exam
        </p>
      )}
    </Stack>
  );
};

export default ExamHallTitle;
