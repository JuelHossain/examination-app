import { LoadingOverlay, Modal } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import { ExamHallProvider } from "../../../context/examHallContext";
import { useGetExamQuery } from "../../../features/exams/examApi";
import { selectColor } from "../../../features/exams/examSelector";
import useResult from "../../../hooks/useResult";
import ExamHall from "./ExamHall";

const ExamHallModal = ({ id, opened, handler, ...props }) => {
  const color = useSelector(selectColor);
  const { data: exam, isLoading } = useGetExamQuery(id);
  const [result, loading, userExams] = useResult(id);
  const contextValue = { exam, result, userExams, opened, handler };
  return (
    <ExamHallProvider value={contextValue}>
      <Modal
        {...props}
        classNames={{
          modal: `p-0 ${color?.name}`,
        }}
        centered
        overlayOpacity={0.1}
        overlayBlur={1}
        size={'auto'}
        opened={opened}
        onClose={handler.close}
        withCloseButton={false}
      >
        <LoadingOverlay visible={isLoading || loading} />
        <ExamHall />
      </Modal>
    </ExamHallProvider>
  );
};

export default ExamHallModal;
