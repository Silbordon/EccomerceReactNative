import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart: (state, action) => {
      const { id, price, quantity } = action.payload;
      const itemFound = state.items.find((item) => item.id === id);
      if (itemFound) {
        itemFound.quantity += quantity;
        itemFound.totalPrice = itemFound.quantity * itemFound.price;
      } else {
        state.items.push({ ...action.payload, totalPrice: price * quantity });
      }
      state.total += price * quantity;
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemFound = state.items.find((item) => item.id === id);
      if (itemFound) {
        state.total -= itemFound.totalPrice;
        itemFound.quantity = quantity;
        itemFound.totalPrice = itemFound.quantity * itemFound.price;
        state.total += itemFound.totalPrice;
      }
    },
    removeItemCart: (state, action) => {
      const id = action.payload;
      const itemFound = state.items.find((item) => item.id === id);
      if (itemFound) {
        state.total -= itemFound.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItemCart, updateItemQuantity, removeItemCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
