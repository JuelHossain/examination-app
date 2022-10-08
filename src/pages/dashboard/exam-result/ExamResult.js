import { Card, ScrollArea, Stack, Title } from "@mantine/core";
import React from "react";

// import ExamList from "./edit-exam/ExamList";

const ExamResult = () => {
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
        <Stack>
          {/* {data?.map((exam) => (
            <ExamList key={exam._id} id={exam._id} />
          ))} */}
        </Stack>
      </ScrollArea>
    </Card>
  );
};

export default ExamResult;
