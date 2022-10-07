import { ScrollArea, SimpleGrid } from "@mantine/core";
import React from "react";
import Details from "./Details";
import Questions from "./Questions";

const Form = (props) => {
  return (
    <ScrollArea
      classNames={{
        thumb: "bg-main-500 ",
        scrollbar: "bg-main-100",
      }}
      scrollbarSize={15}
      offsetScrollbars
      className="h-full "
    >
      <SimpleGrid
        cols={2}
        breakpoints={[{ maxWidth: 1024, cols: 1, spacing: "sm" }]}
        align={"stretch"}
      >
        <Details {...props} />
        <Questions {...props} />
      </SimpleGrid>
    </ScrollArea>
  );
};

export default Form;