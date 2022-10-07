import { Button, Card } from "@mantine/core";
import React, { useState } from "react";
import Form from "./Form";
import CardTitle from "./Title";

const CreateExam = () => {
  const [totalQ, setTotalQ] = useState(3);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const props = { totalQ, setTotalQ, form, setForm, handleChange };

  return (
    <Card
      onSubmit={(e) => {
        e.preventDefault();
        console.log(form);
      }}
      component="form"
      withBorder
      shadow={"xs"}
      className="flex-1 bg-main-50/20 flex flex-col"
    >
      <CardTitle {...props} />
      <Form {...props} />
      <Button type="submit">Create Exam</Button>
    </Card>
  );
};

export default CreateExam;
