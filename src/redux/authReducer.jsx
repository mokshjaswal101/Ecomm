import { createSlice } from "@reduxjs/toolkit";

import cookie from "react-cookies";
import { createPost } from "../api/posts";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthSlice = createSlice({
  name: "User",
  initialState: {
    userLoggedIn: false,
    userData: {},
    posts: [],
    events: [],
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = { ...action.payload };
      state.userLoggedIn = true;
    },

    setToken: (state, action) => {
      cookie.save("userId", action.payload);
      state.userLoggedIn = true;
    },

    logout: (state, action) => {
      cookie.remove("userId");
      state.userLoggedIn = false;
      state.userData = {};
    },
  },
});

//Actions
export const { setUserData, setToken, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
