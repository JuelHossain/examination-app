import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload;
    },
    userLoggedOut: (state) => {
      localStorage.removeItem("auth");
      state.user = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
