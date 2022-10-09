import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowRightTail } from "@tabler/icons";
import React from "react";
import { useSelector } from "react-redux";
import { selectColor } from "../../../features/exams/examSelector";

import ExamHall from "./ExamHall";

const StartExam = ({ id }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const color = useSelector(selectColor);
  return (
    <>
      <Button
        onClick={toggle}
        rightIcon={<IconArrowRightTail />}
        className="bg-main-200/50 text-main-900/80 dark:bg-main-900/50 dark:text-main-400 dark:hover:bg-main-800/50 hover:bg-main-300/50 duration-300 "
        size="sm"
      >
        Start
      </Button>
      <Modal
        classNames={{
          modal: `p-0 ${color?.name}`,
        }}
        centered
        overlayOpacity={0.1}
        overlayBlur={1}
        size={1000}
        opened={opened}
        onClose={toggle}
        withCloseButton={false}
      >
        <ExamHall id={id} toggle={toggle} />
      </Modal>
    </>
  );
};

export default StartExam;
