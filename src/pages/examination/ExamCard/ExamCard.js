import { Card, LoadingOverlay } from "@mantine/core";
import React from "react";
import { useGetExamQuery } from "../../../features/exams/examApi";
import useResult from "../../../hooks/useResult";
import { ExamCardProvider } from "../context/examCardContext";

import CompletedIcon from "./CompletedIcon";
import ExamCardBody from "./ExamCardBody";
import ExamCardFooter from "./ExamCardFooter";
import ExamCardTitle from "./ExamCardTitle";

const ExamCard = ({ id }) => {
  // getting exam
  const { data: exam, isLoading: examLoading } = useGetExamQuery(id);
  const [result, resultLoading] = useResult(id);

  const CardValue = { exam, result };

  const CardClasses = `${
    result && "border-green-500/50  bg-green-200/20 dark:bg-green-800/20"
  } flex flex-col gap-2 p-2 pt-0 justify-between  relative `;

  return (
    <ExamCardProvider value={CardValue}>
      <Card withBorder className={CardClasses}>
        <LoadingOverlay visible={examLoading || resultLoading} />
        <ExamCardTitle />
        <ExamCardBody />
        <ExamCardFooter />
        <CompletedIcon />
      </Card>
    </ExamCardProvider>
  );
};

export default ExamCard;
