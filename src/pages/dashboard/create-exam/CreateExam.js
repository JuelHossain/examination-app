import { Button, Card, LoadingOverlay } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/auth/authSelector";
import { useCreateExamMutation } from "../../../features/exams/examApi";
import Form from "./Form";

import { initialFormValues } from "./initialFormValues";
import CardTitle from "./Title";

const CreateExam = () => {
  const user = useSelector(selectUser);
  const form = useForm(initialFormValues);

  const { reset, onSubmit } = form;
  const [createExam, { isSuccess, isError, isLoading }] =
    useCreateExamMutation();
  useEffect(() => {
    if (isSuccess) {
      showNotification({
        title: "Examination Created Successfully",
        color: "teal",
        icon: <IconCheck />,
      });
      reset();
    }
    if (isError) {
      showNotification({
        title: "There Was en Error",
        color: "red",
        icon: <IconX />,
      });
    }
  }, [isSuccess, isError, reset]);
  return (
    <Card
      onSubmit={onSubmit((data) => {
        console.log(data);
        createExam({ ...data, createdBy: user });
      })}
      component="form"
      withBorder
      shadow={"xs"}
      className="flex-1 bg-main-50/20 flex flex-col gap-4"
    >
      <LoadingOverlay visible={isLoading} />
      <CardTitle form={form} title="Create A Exam" />
      <Form form={form} />
      <Button size="xl" className="bg-main-500" type="submit">
        Create Exam
      </Button>
    </Card>
  );
};

export default CreateExam;
