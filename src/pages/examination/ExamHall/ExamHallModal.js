import { Modal } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectColor } from "../../../features/exams/examSelector";
import { ExamHallProvider } from "../context/examHallContext";
import useExamHallForm from "../hooks/useExamHallForm";
import useStepper from "../hooks/useStepper";
import ExamHall from "./ExamHall";

const ExamHallModal = ({ id, opened, handler }) => {
  const color = useSelector(selectColor);
  const form = useExamHallForm(id);
  const stepperFn = useStepper(form);
  const contextValue = { form, stepperFn, opened, handler };
  return (
    <ExamHallProvider value={contextValue}>
      <Modal
        classNames={{
          modal: `p-0 ${color?.name}`,
        }}
        centered
        overlayOpacity={0.1}
        overlayBlur={1}
        size={"auto"}
        opened={opened}
        onClose={handler.close}
        withCloseButton={false}
      >
        <ExamHall />
      </Modal>
    </ExamHallProvider>
  );
};

export default ExamHallModal;
