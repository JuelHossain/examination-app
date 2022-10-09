import { CloseButton } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

export default function RemoveQuestion({ index, form }) {
  const { values, removeListItem } = form ?? {};

  const removeThisQuestion = () => {
    if (values.questions.length > 2) {
      removeListItem("questions", index);
    } else {
      showNotification({
        title: "Your Exam Needs At least 2 Question",
        color: "red",
      });
    }
  };

  const closeButtonProps = {
    className: "absolute top-3 right-3 hover:bg-main-50 text-main-500",
    onClick: removeThisQuestion,
  };

  return <CloseButton {...closeButtonProps} />;
}
