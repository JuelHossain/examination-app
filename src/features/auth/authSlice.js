import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  loginError: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload;
    },
    userLoggedOut: (state) => {
      localStorage.removeItem("user");
      console.log('hello')
      state.user = undefined;
    },
    setLoginError: (state, action) => {
      state.loginError = action.payload;
    },
  },
});

export const { userLoggedIn, userLoggedOut, setLoginError } = authSlice.actions;
export default authSlice.reducer;
