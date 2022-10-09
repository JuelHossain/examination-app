import { Card } from "@mantine/core";
import React from "react";
import { useExamCard } from "../../../context/examCardContext";

const classes = {
  root: "flex flex-col gap-2 p-2 pt-0 justify-between  relative",
  completedRoot: "border-green-500/50  bg-green-200/20 dark:bg-green-800/20",
  titleWrapper: "bg-main-100/50 dark:bg-main-900/50 dark:text-main-400/80",
  title: "text-xl font-semibold  p-4  rounded-md truncate",
  bodyWrapper: "flex-1 flex flex-col justify-between gap-2",
  description: " px-4 py-1 rounded-md line-clamp-2",
  mark: " px-4 py-1 text-sm dark:bg-main-50/20 bg-main-400/20 rounded-md  line-clamp-2",
  completedIcon:
    "absolute top-2 right-2 bg-green-500 text-green-50 rounded-full",
};

const ExamCardBody = () => {
  const { exam: { description, questions } = {}, result: { mark } = {} } =
    useExamCard();
  return (
    <Card.Section className={classes.bodyWrapper} withBorder>
      <p className={classes.description}>{description}</p>
      <p className={classes.mark}>
        {mark
          ? `Your Mark : ${mark}/${questions?.length}`
          : `Total Mark: ${questions?.length}`}
      </p>
    </Card.Section>
  );
};

export default ExamCardBody;
