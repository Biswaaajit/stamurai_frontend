import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/app/_lib/userSlice";
import workSlice from "@/app/_lib/workSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    work: workSlice,
  },
});

export default store;
