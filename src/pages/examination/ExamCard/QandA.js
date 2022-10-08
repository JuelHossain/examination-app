import { Button, Group, Stepper } from "@mantine/core";
import { useForm } from "@mantine/form";
import { randomId, useDisclosure } from "@mantine/hooks";
import { IconCheck, IconCircleX } from "@tabler/icons";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../../features/auth/authApi";
import { selectUser } from "../../../features/auth/authSelector";
import ConfirmSubmission from "./ConfirmSubmition";
import NotSelectedError from "./NotSelectedError";
import QuestionList from "./QuestionList";

const QandA = ({ exam, result }) => {
  const { questions } = exam;
  const { _id: id } = useSelector(selectUser);
  const { data: { exams: userExams } = {} } = useGetUserQuery(id);

  const [active, setActive] = useState(0);
  const [isError, { toggle: toggleError, close: closeError }] = useDisclosure();
  const [isConfirm, { toggle: toggleConfirm }] = useDisclosure();

  const form = useForm();
  const { setValues, values } = form;
  useEffect(() => {
    const initialResult = {
      ...exam,
      questions: questions.map((question) => ({
        ...question,
        answered: "",
        mark: 0,
      })),
    };
    if (result) {
      setValues({ ...result, result: true });
      setActive(questions.length);
    } else {
      setValues(initialResult);
    }
  }, [result]);
  const [updateUser] = useUpdateUserMutation();
  const isAnswered = values.questions?.[active]?.answered;
  const isLastQ = questions.length - 1 === active;
  const submitHandler = () => {
    const mark = values.questions.reduce((total, q) => {
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

  const goToNextStep = () =>
    setActive((current) =>
      current < questions.length ? current + 1 : current
    );
  const nextStep = () => {
    if (isAnswered) {
      closeError();
      if (isLastQ) {
        toggleConfirm();
      } else {
        goToNextStep();
      }
    } else {
      toggleError();
    }
  };
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  return (
    <>
      <Stepper
        color={"green"}
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
      >
        {values.questions?.map((question, index) => {
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
          <p className="text-center text-xl font-bold  bg-main-500 p-3 text-main-50">
            You Have Got {values?.mark} mark In Total
          </p>
        </Stepper.Completed>
      </Stepper>
      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        {values?.questions?.length === active ? (
          <Button className="bg-main-500" component={Link} to="/dashboard/exam-result">
            Exam Results
          </Button>
        ) : (
          <Button
            className="bg-main-500"
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
