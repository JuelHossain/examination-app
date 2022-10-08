import { Card, ScrollArea, Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../../features/auth/authApi";
import { selectUser } from "../../../features/auth/authSelector";
import StatsRing from "./States";

// import ExamList from "./edit-exam/ExamList";

const ExamResult = () => {
  const { _id: id } = useSelector(selectUser);
  const {
    data: { exams }={},
  } = useGetUserQuery(id);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (exams) {
      const data = exams.map((exam) => {
        const { title, questions, mark } = exam;
        const progress = (mark / questions.length) * 100;
        return {
          label: title,
          stats: `${mark}/${questions.length}`,
          progress,
          color: progress > 70 ? "green" : "red",
          icon: progress > 70 ? "up" : "down",
        };
      });
      setData(data);
    }
  }, [exams]);
  return (
    <Card
      component="form"
      withBorder
      shadow={"xs"}
      className="flex-1 flex flex-col"
    >
      {/* <LoadingOverlay visible={isLoading} /> */}
      <Title order={4} className="mb-3">
        Your Exams Result
      </Title>
      <ScrollArea
        classNames={{
          thumb: "bg-main-500 ",
          scrollbar: "bg-main-100",
        }}
        scrollbarSize={15}
        className="h-full "
      >
        <StatsRing data={data} />
      </ScrollArea>
    </Card>
  );
};

export default ExamResult;
