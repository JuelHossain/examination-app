import { Button, Group, Notification } from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import React from "react";

const ConfirmSubmission = ({ toggleError, next }) => {
  return (
    <Notification
      loading
      disallowClose
      className="absolute z-10 top-1/2 left-44"
      title="Hey, You Are Going To Submit Now"
      icon={<IconCheck size={18} />}
      color="green"
    >
      <p>Please Be Noted That You Can't Change Your Mind Later.</p>
      <Group position="right" className="mt-2 gap-2">
        <Button className={"bg-red-100 text-red-500"} size="xs" onClick={next}>
          Cancel
        </Button>
        <Button className="bg-main-500" size="xs" onClick={next}>
          Proceed
        </Button>
      </Group>
    </Notification>
  );
};

export default ConfirmSubmission;
