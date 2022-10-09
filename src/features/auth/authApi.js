import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    createUser: mutation({
      query: (data) => ({
        url: "/user",
        method: "POST",
        body: data,
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            authApi.util.updateQueryData("getUsers", undefined, (draft) => {
              draft.push(data);
            })
          );
        } catch {}
      },
    }),
    login: query({
      query: (data) => ({
        url: "/user/login",
        method: "GET",
        headers: {
          user: data,
        },
      }),
      keepUnusedDataFor: 0,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: user } = await queryFulfilled;
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(userLoggedIn(user));
        } catch (err) {
          // do nothing
        }
      },
    }),
    getUsers: query({
      query: (admin) => `/user?admin=${admin}`,
      providesTags: ["getUsers"],
    }),
    getUser: query({
      query: (id) => `user/alone/${id}`,
    }),
    updateUser: mutation({
      query: ({ id, patch }) => ({
        url: `/user/alone/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["getUsers"],
      onQueryStarted: async ({ id, patch }, { queryFulfilled, dispatch }) => {
        const patched = dispatch(
          authApi.util.updateQueryData("getUser", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (err) {
          console.log(err);
          patched.undo();
        }
      },
    }),
    deleteUser: mutation({
      query: (id) => ({
        url: `/user/alone/${id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (id, { queryFulfilled, dispatch }) => {
        const deleted = dispatch(
          authApi.util.updateQueryData("getUsers", undefined, (draft) => {
            return draft.filter(
              (user) => user._id.toString() !== id.toString()
            );
          })
        );
        const deletedAdmin = dispatch(
          authApi.util.updateQueryData("getUsers", "admin", (draft) => {
            return draft.filter(
              (user) => user._id.toString() !== id.toString()
            );
          })
        );
        try {
          await queryFulfilled;
        } catch {
          deleted.undo();
          deletedAdmin.undo();
        }
      },
    }),
  }),
});

export const {
  useLoginQuery,
  useCreateUserMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = authApi;
