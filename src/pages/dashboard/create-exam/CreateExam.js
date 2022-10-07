import { Button, Card } from "@mantine/core";
import React from "react";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../../features/auth/authSelector";
import Form from "./Form";
import { FormProvider, useForm } from "./form-context";
import { initialFormValues } from "./initialFormValues";
import CardTitle from "./Title";

const CreateExam = () => {
  // const user = useSelector(selectUser);
  const form = useForm(initialFormValues);
  console.log(form.values);
  // const [createExam, { data, isSuccess, isError, error }] =
  //   useCreateExamMutation();
  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log(data);
  //   }
  //   if (isError) {
  //     console.log(error.data);
  //   }
  // }, [isSuccess, data, isError, error]);
  return (
    <FormProvider form={form}>
      <Card
        onSubmit={form.onSubmit((data) => {
          console.log(data);
          // createExam({ ...data, createdBy: user });
        })}
        component="form"
        withBorder
        shadow={"xs"}
        className="flex-1 bg-main-50/20 flex flex-col"
      >
        <CardTitle />
        <Form />
        <Button color="violet" type="submit">
          Create Exam
        </Button>
      </Card>
    </FormProvider>
  );
};

export default CreateExam;
