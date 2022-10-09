import { Card, Text } from "@mantine/core";
import { useExamCard } from "../../../context/examCardContext";

const classes = {
  titleWrapper: "bg-main-100/50 dark:bg-main-900/50 dark:text-main-400/80",
  title: "text-xl font-semibold  p-4  rounded-md truncate",
};

const ExamCardTitle = () => {
    const { exam: { title }={} } = useExamCard();
  return (
    <Card.Section withBorder className={classes.titleWrapper}>
      <Text className={classes.title}>{title}</Text>
    </Card.Section>
  );
};

export default ExamCardTitle;
