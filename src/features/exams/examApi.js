import { apiSlice } from "../api/apiSlice";

export const examApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getExams: query({
      query: (email) => `/exam?email=${email}`,
    }),
    getExam: query({
      query: (id) => `/exam/${id}`,
    }),
    createExam: mutation({
      query: (data) => ({
        url: "/exams",
        method: "POST",
        body: data,
      }),
      onQueryStarted: async (data) => {
        console.log(data);
      },
    }),
    updateExam: mutation({
      query: ({ id, patch }) => ({
        url: `/exam/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
  }),
});

export const {
  useCreateExamMutation,
  useUpdateExamMutation,
  useGetExamQuery,
  useGetExamsQuery,
} = examApi;
