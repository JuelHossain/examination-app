import { Stepper } from "@mantine/core";
import { randomId } from "@mantine/hooks";

import { useExamHall } from "../../../../context/examHallContext";
import CompletedMessage from "./CompletedMessage";
import StepperActions from "./StepperActions";

import useQuestions from "./useQuestions";

const QandA = () => {
  const steppers = useQuestions();
  const { stepperFn } = useExamHall();
  const { active, stepHandler } = stepperFn ?? {};
  return (
    <>
      <Stepper
        color={"green"}
        active={active}
        onStepClick={stepHandler}
        breakpoint="sm"
      >
        {steppers}
        <Stepper.Completed key={randomId()}>
          <CompletedMessage />
        </Stepper.Completed>
      </Stepper>
      <StepperActions />
    </>
  );
};

export default QandA;
