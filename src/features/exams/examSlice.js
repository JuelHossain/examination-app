import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: {
    name: "purple",
    class: "bg-purple-500",
  },
};

const createExamSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
      localStorage.setItem("color", JSON.stringify(action.payload));
    },
  },
});

export const { setColor } = createExamSlice.actions;
export default createExamSlice.reducer;
