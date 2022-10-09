import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import examSlice from "../features/exams/examSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    exam: examSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
