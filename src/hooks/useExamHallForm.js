import { useForm } from "@mantine/form";

import { useEffect } from "react";
import { useGetExamQuery } from "../features/exams/examApi";
import useResult from "./useResult";

const useExamHallForm = (id) => {
  const form = useForm();
  const { data: exam } = useGetExamQuery(id);
  const [result] = useResult(id);
  const { setValues } = form;
  useEffect(() => {
    const initialResult = {
      ...exam,
      questions: exam.questions.map((question) => ({
        ...question,
        answered: "",
        mark: 0,
      })),
    };
    if (result) {
      setValues({ ...result, result: true });
    } else {
      setValues(initialResult);
    }
  }, [result]);
  return form;
};

export default useExamHallForm;
