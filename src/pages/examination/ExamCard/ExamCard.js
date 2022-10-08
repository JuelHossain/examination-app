import { Group, LoadingOverlay, Stack } from "@mantine/core";
import React from "react";
import UserInfo from "../../../components/header/userNav/UserInfo";
import { useGetExamQuery } from "../../../features/exams/examApi";
import StartExam from "./StartExam";

const ExamCard = ({ id }) => {
  const {
    data: { title, description, createdBy: { name: authorName } = {} } = {},
    isLoading: examLoading,
  } = useGetExamQuery(id);

  return (
    <Stack className=" p-3 gap-3 bg-main-500/50 hover:bg-main-700 duration-300 rounded-md shadow-md border border-main-900/50 shadow-main-300 justify-between">
      <LoadingOverlay visible={examLoading} />
      <p className="text-xl font-semibold text-main-700 bg-main-200 py-1 px-2 rounded-md">
        {title}
      </p>
      <p className="bg-main-100 text-main-700 px-2 py-1 rounded-md flex-1">
        {description}
      </p>
      <Group position="apart">
        <UserInfo author={authorName} />
        <StartExam id={id} />
      </Group>
    </Stack>
  );
};

export default ExamCard;
