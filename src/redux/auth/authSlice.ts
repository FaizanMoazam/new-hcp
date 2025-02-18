// Redux Toolkit Imports
import { createSlice } from "@reduxjs/toolkit";
// Custom Imports
import { RootState } from "../store";

const getInitialUser = () => {
  const localStorageItem = localStorage.getItem("user");
  if (localStorageItem) {
    return JSON.parse(localStorageItem);
  } else {
    return null;
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getInitialUser(),
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;

export const selectedUserId = (state: RootState) =>
  state.auth?.user?.data?.user?._id;
export const selectedUserName = (state: RootState) =>
  state.auth?.user?.data?.user?.name;
export const selectedUserEmail = (state: RootState) =>
  state.auth?.user?.data?.user?.email;
export const selectedUserAvatar = (state: RootState) =>
  state.auth?.user?.data?.user?.pic;
