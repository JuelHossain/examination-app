import { Button, Card } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/auth/authSelector";
import { useCreateExamMutation } from "../../../features/exams/examApi";
import Form from "./Form";
import CardTitle from "./Title";

const CreateExam = () => {
  const user = useSelector(selectUser);
  const [totalQ, setTotalQ] = useState(3);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const props = { totalQ, setTotalQ, form, setForm, handleChange };
  const [createExam, { data, isSuccess, isError, error }] =
    useCreateExamMutation();
  useEffect(() => {
    if (isSuccess) {
      resetForm();
    }
    if (isError) {
      console.log(error.data);
    }
  }, [isSuccess, data, isError, error]);
  return (
    <Card
      onSubmit={(e) => {
        e.preventDefault();
        createExam({ ...form, createdBy: user });
      }}
      component="form"
      withBorder
      shadow={"xs"}
      className="flex-1 bg-main-50/20 flex flex-col"
    >
      <CardTitle {...props} />
      <Form {...props} />
      <Button color="violet" type="submit">
        Create Exam
      </Button>
    </Card>
  );
};

export default CreateExam;
