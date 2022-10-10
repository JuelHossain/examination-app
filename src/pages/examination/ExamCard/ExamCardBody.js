import { Card } from "@mantine/core";
import React from "react";
import { useExamCard } from "../context/examCardContext";

const classes = {
  bodyWrapper: "flex-1 flex flex-col justify-between gap-2",
  description: " px-4 py-1 rounded-md line-clamp-2",
  mark: " px-4 py-1 text-sm dark:bg-main-50/20 bg-main-400/20 rounded-md  line-clamp-2",
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
