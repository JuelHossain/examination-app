import { Chip } from "@mantine/core";
import React from "react";
import { useExamHall } from "../../context/examHallContext";

const useChipOption = ({ question, index }) => {
  const { form: { values: { result, questions } = {} } = {} } = useExamHall();

  const { options } = question ?? {};

  const chipOption = Object.keys(options).map((option) => {
    let color;
    if (result) {
      if (option === questions[index].answer) {
        color = "bg-green-200 dark:bg-green-800/50";
      } else if (option === questions[index].answered) {
        color = "bg-red-200 dark:bg-red-800/50";
      }
    }

    const optionProps = {
      readOnly: result,
      key: option,
      size: "lg",
      radius: "md",
      color: "green",
      variant: "filled",
      classNames: {
        root: "w-full ",
        label: ` w-full ${color} `,
      },
      value: option,
    };
    return <Chip {...optionProps}>{options[option]}</Chip>;
  });
  return chipOption;
};

export default useChipOption;
