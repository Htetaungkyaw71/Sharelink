import { createSlice } from "@reduxjs/toolkit";

const linkSlice = createSlice({
  name: "linkSlice",
  initialState: {},
  reducers: {
    // addProject: (state, action) => {
    //   state[action.payload] = { todo: [], doing: [], done: [] };
    //   let copyState = { ...state };
    // },
  },
});

export const { addProject } = linkSlice.actions;

export default linkSlice.reducer;
