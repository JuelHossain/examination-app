import { Stack } from "@mantine/core";
import React from "react";

const AlreadyDone = () => {
  return (
    <Stack className="text-center">
      <p className="text-4xl font-bold text-main-500 rounded-md">Wow! Men</p>
      <p className="text-3xl font-bold text-main-500 rounded-md p">
        You Have Already participated in This Exam{" "}
      </p>
      <p className="text-8xl font-bold text-main-500 rounded-md p-10 bg-main-200">
        Congrats
      </p>
    </Stack>
  );
};

export default AlreadyDone;
