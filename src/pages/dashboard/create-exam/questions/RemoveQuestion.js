import { CloseButton } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useFormContext } from "../form-context";

export default function RemoveQuestion({ index }) {
  const { values, removeListItem } = useFormContext();
  return (
    <CloseButton
      className="absolute top-0 right-0"
      onClick={() => {
        if (values.questions.length > 2) {
          removeListItem("questions", index);
        } else {
          showNotification({
            title: "Your Exam Needs At least 2 Question",
            color: "red",
          });
        }
      }}
    />
  );
}
