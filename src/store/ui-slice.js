import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartVisible: true,
  notification: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      // state.notification =
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
