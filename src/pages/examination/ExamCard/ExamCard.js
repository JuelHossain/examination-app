import { Group, LoadingOverlay, Stack } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserInfo from "../../../components/header/userNav/UserInfo";
import { useGetUserQuery } from "../../../features/auth/authApi";
import { selectUser } from "../../../features/auth/authSelector";
import { useGetExamQuery } from "../../../features/exams/examApi";
import StartExam from "./StartExam";

const ExamCard = ({ id }) => {
  const {
    data: { title, description, createdBy: { name: authorName } = {} } = {},
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
    <Stack className={` p-3 gap-3 bg-main-500/50 hover:bg-main-700 duration-300 rounded-md shadow-md border border-main-900/50 shadow-main-300 justify-between relative ${result && "border-green-500  bg-green-200/20"}`}>
      <LoadingOverlay visible={examLoading} />
      <p className="text-xl font-semibold text-main-700 bg-main-200 py-1 px-2 rounded-md truncate">
        {title}
      </p>
      <p className="bg-main-100 text-main-700 px-2 py-1 rounded-md flex-1">
        {description}
      </p>
      <Group position="apart" noWrap>
        <UserInfo author={authorName} />
        <StartExam id={id} />
      </Group>
      {result && (
        <div className="absolute top-2 right-2 bg-green-500 text-green-50 rounded-full">
          <IconCircleCheck size={30} />
        </div>
      )}
    </Stack>
  );
};

export default ExamCard;
