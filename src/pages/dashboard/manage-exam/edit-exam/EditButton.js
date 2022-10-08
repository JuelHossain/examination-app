import { ActionIcon, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPencil } from "@tabler/icons";
import React from "react";
import EditExam from "./EditExam";

const EditButton = ({ id }) => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <ActionIcon
        onClick={toggle}
        className="bg-main-500"
        size={"xl"}
        variant="filled"
      >
        <IconPencil />
      </ActionIcon>
      <Modal
        overlayOpacity={0.1}
        overlayBlur={1}
        size={"xl"}
        withCloseButton={false}
        opened={opened}
        onClose={toggle}
      >
        <EditExam id={id} toggle={toggle} />
      </Modal>
    </>
  );
};

export default EditButton;
