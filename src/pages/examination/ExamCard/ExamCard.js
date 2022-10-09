import { Card, Group, LoadingOverlay } from "@mantine/core";
import { IconCircleCheck, IconUserCheck } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../../features/auth/authApi";
import { selectUser } from "../../../features/auth/authSelector";
import { useGetExamQuery } from "../../../features/exams/examApi";

import StartExam from "./StartExam";

const ExamCard = ({ id }) => {
  const {
    data: {
      title,
      description,
      questions,
      createdBy: { name: authorName } = {},
    } = {},
    isLoading: examLoading,
  } = useGetExamQuery(id);

  const { _id: userId } = useSelector(selectUser);
  const { data: { exams: userExams } = {}, isLoading: examsLoading } =
    useGetUserQuery(userId);
  const [result, setResult] = useState();
  useEffect(() => {
    if (userExams) {
      const match = userExams.find((exam) => exam._id === id);
      setResult(match);
    }
  }, [userExams, id]);

  return (
    <Card
      withBorder
      className={`flex flex-col gap-2 p-2 pt-0 justify-between  relative ${
        result && "border-green-500/50  bg-green-200/20 dark:bg-green-800/20"
      }`}
    >
      <LoadingOverlay visible={examLoading || examsLoading} />
      <Card.Section
        withBorder
        className="bg-main-100/50 dark:bg-main-900/50 dark:text-main-400/80"
      >
        <p className="text-xl font-semibold  p-4  rounded-md truncate">
          {title}
        </p>
      </Card.Section>

      <Card.Section
        className="flex-1 flex flex-col justify-between gap-2"
        withBorder
      >
        <p className=" px-4 py-1 rounded-md line-clamp-2">{description}</p>
        <p className=" px-4 py-1 text-sm dark:bg-main-50/20 bg-main-400/20 rounded-md  line-clamp-2">
          {result
            ? `Your Mark : ${result?.mark}/${questions?.length}`
            : `Total Mark: ${questions?.length}`}
        </p>
      </Card.Section>
      <Group position="apart">
        <Group spacing={3}>
          <IconUserCheck size={14} />
          <p className="capitalize text-xs">{authorName}</p>
        </Group>
        <StartExam id={id} />
      </Group>
      {result && (
        <div className="absolute top-2 right-2 bg-green-500 text-green-50 rounded-full">
          <IconCircleCheck size={25} />
        </div>
      )}
    </Card>
  );
};

export default ExamCard;
