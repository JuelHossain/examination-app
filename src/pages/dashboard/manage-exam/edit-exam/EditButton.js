import { ActionIcon, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPencil } from "@tabler/icons";
import React from "react";
import { useSelector } from "react-redux";
import { selectColor } from "../../../../features/exams/examSelector";
import EditExam from "./EditExam";

const EditButton = ({ id }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const color = useSelector(selectColor);
  return (
    <>
      <ActionIcon
        onClick={toggle}
        className="bg-main-500 dark:bg-main-900 dark:text-main-200"
        size={"xl"}
        variant="filled"
      >
        <IconPencil />
      </ActionIcon>
      <Modal
        classNames={{
          modal: `p-0 ${color?.name}`,
        }}
        withCloseButton={false}
        overlayOpacity={0.1}
        overlayBlur={1}
        size={"xl"}
        opened={opened}
        onClose={toggle}
      >
        <EditExam id={id} toggle={toggle} />
      </Modal>
    </>
  );
};

export default EditButton;
