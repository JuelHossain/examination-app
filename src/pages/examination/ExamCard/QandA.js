import { Button, Group, Overlay, Stepper } from "@mantine/core";
import { useForm } from "@mantine/form";
import { randomId, useDisclosure } from "@mantine/hooks";

import { useEffect, useState } from "react";
import ConfirmSubmission from "./ConfirmSubmition";
import NotSelectedError from "./NotSelectedError";
import QuestionList from "./QuestionList";

const QandA = ({ exam }) => {
  const { questions } = exam;
  const [active, setActive] = useState(0);
  const [isError, { toggle: toggleError }] = useDisclosure();

  const form = useForm();
  const { setValues, values } = form;
  useEffect(() => {
    const result = {
      ...exam,
      questions: questions.map((question) => ({
        ...question,
        answered: "",
      })),
    };

    setValues(result);
  }, [questions, setValues, exam]);

  const isAnswered = values.questions?.[active]?.answered;
  const isLastQ = questions.length - 1 === active;
  const goToNextStep = () =>
    setActive((current) =>
      current < questions.length ? current + 1 : current
    );

  const nextStep = () => {
    if (isAnswered) {
      if (isLastQ) {
        toggleError();
      } else {
        goToNextStep();
      }
    } else {
      toggleError();
    }
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <>
      <Stepper
        color={"green"}
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
      >
        {questions?.map((question, index) => {
          return (
            <Stepper.Step key={randomId()} label={`Question ${index + 1}`}>
              <QuestionList question={question} form={form} index={index} />
              {isError && (
                <>
                  {isLastQ ? (
                    <ConfirmSubmission
                      next={goToNextStep}
                      toggleError={toggleError}
                    />
                  ) : (
                    <NotSelectedError toggleError={toggleError} />
                  )}
                  <Overlay onClick={toggleError} zIndex={2} />
                </>
              )}
            </Stepper.Step>
          );
        })}
        <Stepper.Completed key={randomId()}>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button className="bg-main-500" onClick={nextStep}>
          Next step
        </Button>
      </Group>
    </>
  );
};

export default QandA;
