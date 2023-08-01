// import { createSlice } from "@reduxjs/toolkit";
// import { saveState } from "./localStorage";

// const LinkSlice = createSlice({
//   name: "LinkSlice",
//   initialState: {},
//   reducers: {
//     createId: (state, action) => {
//       const id = action.payload;
//       state[id] = { name: "", email: "", links: [] };
//       saveState(state);
//     },
//     addLink: (state, action) => {
//       const id = action.payload[0];
//       state[id] = { ...state[id], links: action.payload[1] };
//       saveState(state);
//     },
//     addProfile: (state, action) => {
//       const id = action.payload[0];
//       const obj = action.payload[1];
//       state[id] = { ...state[id], ...obj };
//       saveState(state);
//     },
//   },
// });

// export const { createId, addLink, addProfile } = LinkSlice.actions;

// export default LinkSlice.reducer;
