import { Button, Group, Stepper } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { IconCheck, IconCircleX } from "@tabler/icons";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useExamHall } from "../../../../context/examHallContext";
import { useUpdateUserMutation } from "../../../../features/auth/authApi";
import { selectUser } from "../../../../features/auth/authSelector";
import useExamHallForm from "../../../../hooks/useExamHallForm";
import useStepper from "../../../../hooks/useStepper";
import ConfirmSubmission from "../overlays/ConfirmSubmition";
import NotSelectedError from "../overlays/NotSelectedError";
import QuestionList from "./QuestionList";

const QandA = () => {
  const { _id: id } = useSelector(selectUser);
  const { exam: { _id: examId } = {}, result, userExams } = useExamHall();
  const form = useExamHallForm(examId);
  const { values } = form ?? {};
  const { questions, mark } = values ?? {};

  const {
    active,
    isError,
    isConfirm,
    toggleError,
    toggleConfirm,
    goToNextStep,
    nextStep,
    prevStep,
    stepHandler,
  } = useStepper(questions);

  const [updateUser] = useUpdateUserMutation();
  const submitHandler = () => {
    const mark = questions.reduce((total, q) => {
      if (q.answered === q.answer) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);

    updateUser({
      id,
      patch: {
        exams: [...userExams, { ...values, mark }],
      },
    });
    toggleConfirm();
    goToNextStep();
  };

  return (
    <>
      <Stepper
        color={"green"}
        active={active}
        onStepClick={stepHandler}
        breakpoint="sm"
      >
        {questions?.map((question, index) => {
          return (
            <Stepper.Step
              color={
                question.answer === question.answered
                  ? "green"
                  : result
                  ? "red"
                  : "green"
              }
              completedIcon={
                question.answer === question.answered ? (
                  <IconCheck />
                ) : result ? (
                  <IconCircleX />
                ) : (
                  <IconCheck />
                )
              }
              key={randomId()}
              label={`Question ${index + 1}`}
            >
              <QuestionList question={question} form={form} index={index} />
              <NotSelectedError opened={isError} toggle={toggleError} />
              <ConfirmSubmission
                opened={isConfirm}
                toggle={toggleConfirm}
                next={submitHandler}
              />
            </Stepper.Step>
          );
        })}
        <Stepper.Completed key={randomId()}>
          <p className="text-center text-xl font-bold  bg-main-500 p-3 text-main-50 dark:bg-main-900 dark:text-main-200 rounded-md">
            You Have Got {mark} mark In Total
          </p>
        </Stepper.Completed>
      </Stepper>
      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        {questions?.length === active ? (
          <Button
            className="bg-main-500 dark:bg-main-900 dark:text-main-200"
            component={Link}
            to="/dashboard/exam-result"
          >
            Exam Results
          </Button>
        ) : (
          <Button
            className="bg-main-500 dark:bg-main-900 dark:text-main-200"
            onClick={result ? goToNextStep : nextStep}
          >
            Next step
          </Button>
        )}
      </Group>
    </>
  );
};

export default QandA;
