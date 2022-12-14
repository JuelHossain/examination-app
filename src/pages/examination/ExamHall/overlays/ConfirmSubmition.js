import { Button, Group, Notification, Overlay } from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import React from "react";
import { useExamHall } from "../../context/examHallContext";
import useSubmitAnswers from "../../hooks/useSubmitAnswers";

const ConfirmSubmission = () => {
  const submitAnswer = useSubmitAnswers();
  const { stepperFn: { isConfirm, toggleConfirm } = {} } = useExamHall();

  return (
    isConfirm && (
      <div className="absolute z-10 top-0 left-0 bottom-0 right-0 flex items-center justify-center ">
        <Notification
          loading
          disallowClose
          title="Hey, You Are Going To Submit Now"
          icon={<IconCheck size={18} />}
          color="green"
          className="z-20"
        >
          <p>Please Be Noted That You Can't Change Your Mind Later.</p>
          <Group position="right" className="mt-2 gap-2">
            <Button
              className={"bg-red-100 text-red-500"}
              size="xs"
              onClick={toggleConfirm}
            >
              Cancel
            </Button>
            <Button className="bg-main-500" size="xs" onClick={submitAnswer}>
              Proceed
            </Button>
          </Group>
        </Notification>
        <Overlay
          blur={1}
          onClick={toggleConfirm}
          zIndex={2}
          className="bg-black/2 dark:bg-black/20"
        />
      </div>
    )
  );
};

export default ConfirmSubmission;
