import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowRightTail } from "@tabler/icons";
import React from "react";
import { useExamCard } from "../context/examCardContext";

import ExamHallModal from "../ExamHall/ExamHallModal";

const StartExam = () => {
  const [opened, handler] = useDisclosure();
  const { exam: { _id } = {} } = useExamCard();

  // exam hall props
  const examHallProps = {
    id: _id,
    opened,
    handler,
  };
  return (
    <>
      <Button
        onClick={handler.toggle}
        rightIcon={<IconArrowRightTail />}
        className="bg-main-200/50 text-main-900/80 dark:bg-main-900/50 dark:text-main-400 dark:hover:bg-main-800/50 hover:bg-main-300/50 duration-300 "
        size="sm"
      >
        Start
      </Button>
      <ExamHallModal {...examHallProps} />
    </>
  );
};

export default StartExam;
