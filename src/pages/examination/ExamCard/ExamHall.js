import { Card, CloseButton, LoadingOverlay } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../../features/auth/authApi";
import { selectUser } from "../../../features/auth/authSelector";
import { useGetExamQuery } from "../../../features/exams/examApi";
import ExamHallTitle from "./ExamHallTitle";
import QandA from "./QandA";
const ExamHall = ({ id, toggle }) => {
  const [loading, setLoading] = useState(true);
  const { _id: userId } = useSelector(selectUser);
  const { data: { exams: userExams } = {}, isLoading: examsLoading } =
    useGetUserQuery(userId);
  const [result, setResult] = useState();
  useEffect(() => {
    if (userExams) {
      const match = userExams.find((exam) => exam._id === id);
      setResult(match);
    }
    setLoading(false);
  }, [userExams, id]);

  const { data, isLoading: examLoading } = useGetExamQuery(id);

  return (
    <Card className="p-5 sm:p-10">
      <LoadingOverlay visible={examLoading || examsLoading || loading} />
      {loading || (
        <>
          <ExamHallTitle exam={data} result={result} />
          <QandA exam={data} result={result} />
        </>
      )}
      <CloseButton variant="filled" className="absolute top-3 right-3" onClick={toggle} />
    </Card>
  );
};

export default ExamHall;
