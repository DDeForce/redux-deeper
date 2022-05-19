import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem,
        });
      } else {
        existingItem.quantity = existingItem.quantity++;
        existingItem.totalPrice += newItem.totalPrice;
      }
    },
    removeItemToCart(state) {},
  },
});

export default cartSlice.reducer;
export const uiActions = cartSlice.actions;
