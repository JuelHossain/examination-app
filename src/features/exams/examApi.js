import { apiSlice } from "../api/apiSlice";

export const examApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getExams: query({
      query: (email) => `/exams?email=${email}`,
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
      onQueryStarted: async (data, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            examApi.util.updateQueryData(
              "getExams",
              data?.createdBy?.email,
              (draft) => {
                draft.push(data);
              }
            )
          );
          dispatch(
            examApi.util.updateQueryData("getExams", undefined, (draft) => {
              draft.push(data);
            })
          );
        } catch {}
      },
    }),
    updateExam: mutation({
      query: ({ id, patch }) => ({
        url: `/exams/${id}`,
        method: "PATCH",
        body: patch,
      }),
      onQueryStarted: async ({ id, patch }, { queryFulfilled, dispatch }) => {
        const updated = dispatch(
          examApi.util.updateQueryData("getExam", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          updated.undo();
        }
      },
    }),
    deleteExam: mutation({
      query: (id) => ({
        url: `/exams/${id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (id, { queryFulfilled, dispatch }) => {
        const {
          data: {
            createdBy: { email },
          },
        } = await dispatch(examApi.endpoints.getExam.initiate(id));
        const deleted = await dispatch(
          examApi.util.updateQueryData("getExams", email, (draft) => {
            return draft.filter(
              (exam) => exam._id.toString() !== id.toString()
            );
          })
        );
        try {
          await queryFulfilled;
        } catch {
          deleted.undo();
        }
      },
    }),
  }),
});

export const {
  useCreateExamMutation,
  useUpdateExamMutation,
  useGetExamQuery,
  useGetExamsQuery,
  useDeleteExamMutation,
} = examApi;
