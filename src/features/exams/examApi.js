import { apiSlice } from "../api/apiSlice";

export const examApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getExams: query({
      query: (email) => `/exams?email=${email}`,
      onQueryStarted: async (email) => {
        console.log(email);
      },
    }),
    getExam: query({
      query: (id) => `/exams/${id}`,
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
        url: `/exams/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
    deleteExam: mutation({
      query: (id) => ({
        url: `/exams/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateExamMutation,
  useUpdateExamMutation,
  useGetExamQuery,
  useGetExamsQuery,
  useDeleteExamMutation
} = examApi;
