import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const useStepper = (questions) => {
  const [active, setActive] = useState(0);
  const [isError, { toggle: toggleError, close: closeError }] = useDisclosure();
  const [isConfirm, { toggle: toggleConfirm }] = useDisclosure();
  const isAnswered = questions?.[active]?.answered;
  const isLastQ = questions?.length - 1 === active;

  const goToNextStep = () =>
    setActive((current) =>
      current < questions?.length ? current + 1 : current
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
  const stepHandler = (e) => {
    if (e > active) {
      if (isAnswered) {
        closeError();
        setActive(e);
      } else {
        toggleError();
      }
    } else {
      setActive(e);
    }
  };
  return {
    active,
    isError,
    isConfirm,
    toggleError,
    toggleConfirm,
    goToNextStep,
    nextStep,
    prevStep,
    stepHandler,
  };
};

export default useStepper;
