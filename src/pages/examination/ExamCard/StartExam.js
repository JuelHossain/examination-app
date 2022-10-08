import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowRightTail } from "@tabler/icons";
import React from "react";
import ExamHall from "./ExamHall";

const StartExam = ({ id }) => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Button
        onClick={toggle}
        rightIcon={<IconArrowRightTail />}
        className="bg-main-500"
        size="sm"
      >
        Start
      </Button>
      <Modal
        overlayOpacity={0.1}
        overlayBlur={1}
        size={1000}
        opened={opened}
        onClose={toggle}
      >
        <ExamHall id={id} />
      </Modal>
    </>
  );
};

export default StartExam;
