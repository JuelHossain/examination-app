import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import React from "react";

const NotSelectedError = ({ toggleError }) => {
  return (
    <Notification
      className="absolute z-10 top-1/2 left-1/4"
      onClose={toggleError}
      title="You Have Not Selected Any Options"
      icon={<IconX size={18} />}
      color="red"
    >
      Please Select An Option To Go To the next question
    </Notification>
  );
};

export default NotSelectedError;
