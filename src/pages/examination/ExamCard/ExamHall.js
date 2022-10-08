import { Card, LoadingOverlay } from "@mantine/core";
import React from "react";
import { useGetExamQuery } from "../../../features/exams/examApi";
import ExamHallTitle from "./ExamHallTitle";
import QandA from "./QandA";
const ExamHall = ({ id }) => {
  const { data, isLoading: examLoading } = useGetExamQuery(id);
  return (
    <Card>
      <LoadingOverlay visible={examLoading} />
      <ExamHallTitle exam={data} />
      <QandA exam={data} />
    </Card>
  );
};

export default ExamHall;
