import { Card, CloseButton } from "@mantine/core";
import React from "react";
import { useExamHall } from "../context/examHallContext";
import ExamHallTitle from "./ExamHallTitle";
import QandA from "./q-and-a/QandA";
const ExamHall = () => {
  const { handler } = useExamHall();
  return (
    <Card className="p-5 sm:p-10 space-y-4">
      <ExamHallTitle />
      <QandA />
      <CloseButton className="absolute top-3 right-3" onClick={handler.close} />
    </Card>
  );
};

export default ExamHall;
