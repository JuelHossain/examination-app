import { Button, Card, LoadingOverlay } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../../../../features/auth/authSelector";
import {
  useGetExamQuery,
  useUpdateExamMutation,
} from "../../../../features/exams/examApi";
import Form from "../../create-exam/Form";
import { initialFormValues } from "../../create-exam/initialFormValues";
import CardTitle from "../../create-exam/Title";

const EditExam = ({ id, toggle }) => {
  const user = useSelector(selectUser);
  const {
    data: { createdBy, ...formInitial } = {},
    isLoading: gettingExam,
    isError: isExamError,
    isSuccess: gotExam,
  } = useGetExamQuery(id);

  const form = useForm(initialFormValues);
  const { reset, onSubmit, setValues, values } = form;

  useEffect(() => {
    if (gotExam) {
      setValues(formInitial);
    }
  }, [gotExam]);

  const [
    updateExam,
    { isSuccess: updated, isError: isUpdateError, isLoading: updating },
  ] = useUpdateExamMutation();

  useEffect(() => {
    if (updated) {
      showNotification({
        title: "Examination Updated Successfully",
        color: "teal",
        icon: <IconCheck />,
      });
      reset();
      toggle();
    } else {
    }
    if (isUpdateError || isExamError) {
      showNotification({
        title: "There Was en Error",
        color: "red",
        icon: <IconX />,
      });
    }
  }, [updated, isUpdateError, reset, isExamError]);
  return (
    <Card
      onSubmit={onSubmit((data) => {
        updateExam({ id, patch: { ...data, updatedBy: user } });
      })}
      component="form"
      withBorder
      shadow={"xs"}
      className="flex-1 bg-main-50/20 flex flex-col gap-4"
    >
      <LoadingOverlay visible={updating || gettingExam} />
      <CardTitle form={form} title="Edit The Exam" />
      <Form form={form} />
      <Button size="lg" className="bg-main-500" type="submit">
        Update Exam
      </Button>
    </Card>
  );
};

export default EditExam;
