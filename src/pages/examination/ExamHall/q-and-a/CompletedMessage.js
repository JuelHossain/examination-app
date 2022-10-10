import React from "react";
import { useExamHall } from "../../context/examHallContext";

const CompletedMessage = () => {
  const { form: { values: { mark } = {} } = {} } = useExamHall();
  return (
    <p className="text-center text-xl font-bold  bg-main-500 p-3 text-main-50 dark:bg-main-900 dark:text-main-200 rounded-md">
      You Have Got {mark} mark In Total
    </p>
  );
};

export default CompletedMessage;
