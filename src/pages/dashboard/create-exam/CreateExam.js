import { Button, Card, LoadingOverlay } from "@mantine/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/auth/authSelector";
import { useCreateExamMutation } from "../../../features/exams/examApi";
import Form from "./Form";
import { FormProvider, useForm } from "./form-context";
import { initialFormValues } from "./initialFormValues";
import CardTitle from "./Title";

const CreateExam = () => {
  const user = useSelector(selectUser);
  const form = useForm(initialFormValues);

  const [createExam, { data, isSuccess, isError, error, isLoading }] =
    useCreateExamMutation();
  useEffect(() => {
    if (isSuccess) {
    }
    if (isError) {
      console.log(error.data);
    }
  }, [isSuccess, data, isError, error]);
  return (
    <FormProvider form={form}>
      <Card
        onSubmit={form.onSubmit((data) => {
          console.log(data);
          createExam({ ...data, createdBy: user });
        })}
        component="form"
        withBorder
        shadow={"xs"}
        className="flex-1 bg-main-50/20 flex flex-col"
      >
        <LoadingOverlay visible={isLoading} />
        <CardTitle />
        <Form />
        <Button className="bg-main-500" type="submit">
          Create Exam
        </Button>
      </Card>
    </FormProvider>
  );
};

export default CreateExam;
