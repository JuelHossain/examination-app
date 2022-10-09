import { Card, ScrollArea, Title } from "@mantine/core";
import React from "react";
import StatsRing from "./States";

const ExamResult = () => {
  return (
    <Card
      component="form"
      withBorder
      shadow={"xs"}
      className="flex-1 flex flex-col"
    >
      <Title order={4} className="mb-3">
        Your Exams Result
      </Title>
      <ScrollArea
        classNames={{
          thumb: "bg-main-500 ",
          scrollbar: "bg-main-100 dark:bg-main-900/50",
        }}
        scrollbarSize={15}
        className="h-full "
      >
        <StatsRing />
      </ScrollArea>
    </Card>
  );
};

export default ExamResult;
