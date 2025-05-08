import { createSlice } from "@reduxjs/toolkit";
const initial = {
  workData: [],
};
const workSlice = createSlice({
  name: "work",
  initialState: initial,
  reducers: {
    addWorkData(state, actions) {
      state.workData = [...actions.payload];
    },
    deleteWorkById(state, actions) {
      state.workData = state.workData.filter(
        (work) => work._id !== actions.payload
      );
    },
    updateWorkById(state, actions) {
      state.workData = state.workData.map((work) =>
        work._id === actions.payload ? { ...work, status: true } : work
      );
    },
  },
});

export const { addWorkData, deleteWorkById, updateWorkById } =
  workSlice.actions;
export default workSlice.reducer;
