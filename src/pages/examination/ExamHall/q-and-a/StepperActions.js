import { Button, Group } from "@mantine/core";

import { Link, useMatch } from "react-router-dom";
import { useExamHall } from "../../../../context/examHallContext";

const StepperActions = () => {
  const { form: { values } = {}, stepperFn } = useExamHall();

  const { active, goToNextStep, nextStep, prevStep } = stepperFn ?? {};

  const { questions, result } = values ?? {};
  const match = useMatch("/dashboard/exam-result");

  return (
    <Group position="center" mt="xl">
      <Button disabled={active === 0} variant="default" onClick={prevStep}>
        {active === questions?.length ? "Check Your Answers" : "Back"}
      </Button>
      {questions?.length === active ? (
        <Button
          className="bg-main-500 dark:bg-main-900 dark:text-main-200"
          component={Link}
          to={match ? "/" : "/dashboard/exam-result"}
        >
          {match ? "Exams" : "Exam Results"}
        </Button>
      ) : (
        <Button
          className="bg-main-500 dark:bg-main-900 dark:text-main-200"
          onClick={result ? goToNextStep : nextStep}
        >
          Next Question
        </Button>
      )}
    </Group>
  );
};

export default StepperActions;
