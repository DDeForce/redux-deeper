import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartVisible: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
