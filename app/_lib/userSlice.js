import { createSlice } from "@reduxjs/toolkit";

const initial = {
  userName: "",
  userEmail: "",
  userId: "",
  userImage: "",
  loginStatus: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initial,
  reducers: {
    addUser(state, actions) {
      state.userName = actions.payload.userName;
      state.userEmail = actions.payload.userEmail;
      state.userId = actions.payload._id;
      state.userImage = actions.payload.userImage;
      state.loginStatus = true;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
