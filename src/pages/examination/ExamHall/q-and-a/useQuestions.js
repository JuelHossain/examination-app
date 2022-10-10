import { Stepper } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { IconCheck, IconCircleX } from "@tabler/icons";
import { useExamHall } from "../../../../context/examHallContext";
import ConfirmSubmission from "../overlays/ConfirmSubmition";
import NotSelectedError from "../overlays/NotSelectedError";
import QuestionList from "./QuestionList";

const useQuestions = () => {
  const { form: { values: { questions, result } = {} } = {} } = useExamHall();

  // steppers
  const steppers = questions?.map((question, index) => {
    // states
    const { answer, answered } = question ?? {};
    const rightAnswer = answer === answered;

    // stepProps
    const stepProps = {
      color: rightAnswer ? "green" : result ? "red" : "green",
      completedIcon: rightAnswer ? (
        <IconCheck />
      ) : result ? (
        <IconCircleX />
      ) : (
        <IconCheck />
      ),
      key: randomId(),
      label: `Question ${index + 1}`,
    };

    //q list props
    const qListProps = {
      question,
      index,
    };

    //jsx
    return (
      <Stepper.Step {...stepProps}>
        <QuestionList {...qListProps} />
        <NotSelectedError />
        <ConfirmSubmission />
      </Stepper.Step>
    );
  });

  // steppers
  return steppers;
};

export default useQuestions;
