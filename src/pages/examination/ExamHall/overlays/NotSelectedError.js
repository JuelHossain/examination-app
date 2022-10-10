import { Notification, Overlay } from "@mantine/core";
import { IconX } from "@tabler/icons";
import React from "react";
import { useExamHall } from "../../../../context/examHallContext";

const NotSelectedError = ({ opened, toggle }) => {
  const { stepperFn: { isError, toggleError } = {} } = useExamHall();
  return (
    isError && (
      <div className="absolute z-10 top-0 left-0 bottom-0 right-0 flex items-center justify-center">
        <Notification
          onClose={toggleError}
          title="You Have Not Selected Any Options"
          icon={<IconX size={18} />}
          color="red"
          className="z-20"
        >
          Please Select An Option To Go To the next question
        </Notification>
        <Overlay
          blur={1}
          onClick={toggleError}
          zIndex={2}
          className="bg-black/2 dark:bg-black/20"
        />
      </div>
    )
  );
};

export default NotSelectedError;
