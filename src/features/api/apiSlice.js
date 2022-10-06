import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiURL } from "../../utils/defaults";
import { userLoggedOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: apiURL,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const { email } = getState()?.auth?.user ?? {};
    if (email) {
      headers.set("Authorization", `granted`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      api.dispatch(userLoggedOut());
      localStorage.removeItem("user");
    }
    return result;
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
});
