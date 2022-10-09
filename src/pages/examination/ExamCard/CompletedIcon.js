import { IconCircleCheck } from "@tabler/icons";
import React from "react";
import { useExamCard } from "../../../context/examCardContext";

const CompletedIcon = () => {
  const { result } = useExamCard();
  return (
    result && (
      <IconCircleCheck
        className={`absolute top-2 right-2 bg-green-500 text-green-50 rounded-full`}
        size={25}
      />
    )
  );
};

export default CompletedIcon;
