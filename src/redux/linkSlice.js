import { createSlice } from "@reduxjs/toolkit";
import { saveState } from "./localStorage";

const LinkSlice = createSlice({
  name: "LinkSlice",
  initialState: {},
  reducers: {
    createId: (state, action) => {
      const id = action.payload;
      state[id] = { name: "", email: "", links: [] };
      saveState(state);
    },
  },
});

export const { createId } = LinkSlice.actions;

export default LinkSlice.reducer;
