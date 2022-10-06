import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "/user",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.query({
      query: (data) => ({
        url: "/user",
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
  }),
});

export const { useLoginQuery, useCreateUserMutation } = authApi;
