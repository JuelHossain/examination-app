import { Group } from "@mantine/core";
import React from "react";
import Author from "./Author";
import StartExam from "./StartExam";
const ExamCardFooter = () => {
  return (
    <Group position="apart">
      <Author />
      <StartExam />
    </Group>
  );
};

export default ExamCardFooter;
