import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    title: "",
    description: "",
  },
};

const createExamSlice = createSlice({
  name: "createExam",
  initialState,
  reducers: {
    setForm: (state, action) => {
      Object.assign(state.form, action.payload);
    },
  },
});

export const { setForm } = createExamSlice.actions;
export default createExamSlice.reducer;
