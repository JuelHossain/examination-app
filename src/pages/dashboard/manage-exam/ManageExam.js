import { Card, LoadingOverlay, ScrollArea, Stack, Title } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/auth/authSelector";
import { useGetExamsQuery } from "../../../features/exams/examApi";
import ExamList from "./edit-exam/ExamList";

const ManageExam = () => {
  const { email } = useSelector(selectUser);
  const { data, isLoading } = useGetExamsQuery(email);

  return (
    <Card
      component="form"
      withBorder
      shadow={"xs"}
      className="flex-1 flex flex-col"
    >
      <LoadingOverlay visible={isLoading} />
      <Title order={4} className="mb-3">
        Manage Your Examination
      </Title>
      <ScrollArea
        classNames={{
          thumb: "bg-main-500 ",
          scrollbar: "bg-main-100 dark:bg-main-900/50",
        }}
        scrollbarSize={15}
        className="h-full "
        offsetScrollbars
      >
        <Stack>
          {data?.map((exam) => (
            <ExamList key={exam._id} id={exam._id} />
          ))}
        </Stack>
      </ScrollArea>
    </Card>
  );
};

export default ManageExam;
