import { Avatar, Box, Button, Group, Text } from "@mantine/core";
import { IconBook } from "@tabler/icons";
import { useGetExamQuery } from "../../../../features/exams/examApi";
import DeleteButton from "../DeleteButton";
import EditButton from "./EditButton";

const ExamList = ({ id }) => {
  const { data } = useGetExamQuery(id);
  const { title, description, questions } = data ?? {};
  return (
    <Group
      key={id}
      className=" p-2 bg-main-200 rounded-md text-main-800 relative justify-between pr-6"
    >
      <Group noWrap>
        <Avatar size={"lg"} color="grape">
          <IconBook />
        </Avatar>
        <Box className="bg-main-200">
          <Text className="text-xl font-semibold">{title}</Text>
          <Text>{description}</Text>
        </Box>
      </Group>
      <Group>
        <Button className="bg-main-500 " size="md">
          Questions : {questions?.length}
        </Button>
        <EditButton id={id} />
        <DeleteButton id={id} />
      </Group>
    </Group>
  );
};

export default ExamList;
