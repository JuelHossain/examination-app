import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Card,
  Group,
  LoadingOverlay,
  Modal,
  Popover,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBook, IconPencil, IconTrash } from "@tabler/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/auth/authSelector";
import {
  useDeleteExamMutation,
  useGetExamsQuery,
} from "../../../features/exams/examApi";
import EditExam from "./edit-exam/EditExam";

const ManageExam = () => {
  const { email } = useSelector(selectUser);
  const { data, isLoading } = useGetExamsQuery(email);
  const [deleteExam] = useDeleteExamMutation();
  const [opened, handlers] = useDisclosure(false);
  const [confirm, confirmHandlers] = useDisclosure(false);

  const [id, setId] = useState(0);
  return (
    <Card
      component="form"
      withBorder
      shadow={"xs"}
      className="flex-1 flex flex-col"
    >
      <LoadingOverlay visible={isLoading} />
      <Title order={4} className="mb-3">
        Manage Your Examination
      </Title>
      <ScrollArea
        classNames={{
          thumb: "bg-main-500 ",
          scrollbar: "bg-main-100",
        }}
        scrollbarSize={15}
        className="h-full "
      >
        <Stack>
          {data?.map((exam) => {
            const { _id, title, description, questions } = exam;
            return (
              <Group
                key={_id}
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
                    Questions : {questions.length}
                  </Button>
                  <ActionIcon
                    onClick={() => {
                      handlers.toggle();
                      setId(_id);
                    }}
                    className="bg-main-500"
                    size={"xl"}
                    variant="filled"
                  >
                    <IconPencil />
                  </ActionIcon>
                  <Popover opened={confirm} onClose={confirmHandlers.toggle}>
                    <Popover.Target>
                      <ActionIcon
                        className="bg-main-500"
                        size={"xl"}
                        variant="filled"
                      >
                        <IconTrash />
                      </ActionIcon>
                    </Popover.Target>
                    <Popover.Dropdown className="bg-main-50">
                      <Stack spacing={8}>
                        <p className="font-bold">Are You sure ?</p>
                        <Group noWrap>
                          <Button
                            onClick={() => {
                              confirmHandlers.toggle();
                            }}
                            size="xs"
                            color={"teal"}
                          >
                            No
                          </Button>
                          <Button
                            onClick={() => {
                              deleteExam(_id);
                              confirmHandlers.toggle();
                            }}
                            size="xs"
                            color={"red"}
                          >
                            Yes
                          </Button>
                        </Group>
                      </Stack>
                    </Popover.Dropdown>
                  </Popover>
                </Group>
              </Group>
            );
          })}
        </Stack>
        <Modal
          overlayOpacity={0.1}
          overlayBlur={1}
          size={"xl"}
          withCloseButton={false}
          opened={opened}
          onClose={handlers.toggle}
        >
          <EditExam id={id} toggle={handlers.toggle} />
        </Modal>
      </ScrollArea>
    </Card>
  );
};

export default ManageExam;
