import { Notification, Overlay } from "@mantine/core";
import { IconX } from "@tabler/icons";
import React from "react";

const NotSelectedError = ({ opened, toggle }) => {
  return (
    opened && (
      <>
        <div className="absolute z-10 top-0 left-0 bottom-0 right-0 flex items-center justify-center">
          <Notification
            onClose={toggle}
            title="You Have Not Selected Any Options"
            icon={<IconX size={18} />}
            color="red"
          >
            Please Select An Option To Go To the next question
          </Notification>
        </div>
        <Overlay
          blur={1}
          onClick={toggle}
          zIndex={2}
          className="bg-black/2 dark:bg-black/20"
        />
      </>
    )
  );
};

export default NotSelectedError;
