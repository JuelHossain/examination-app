import { ScrollArea, SimpleGrid } from "@mantine/core";
import React from "react";
import Details from "./Details";
import Questions from "./questions/Questions";

const Form = ({ form }) => {
  return (
    <ScrollArea
      classNames={{
        thumb: "bg-main-500 ",
        scrollbar: "bg-main-100 dark:bg-main-900/50",
      }}
      scrollbarSize={15}
      className="h-full "
    >
      <SimpleGrid
        cols={2}
        breakpoints={[{ maxWidth: 1024, cols: 1, spacing: "sm" }]}
        align={"stretch"}
      >
        <Details form={form} />
        <Questions form={form} />
      </SimpleGrid>
    </ScrollArea>
  );
};

export default Form;
