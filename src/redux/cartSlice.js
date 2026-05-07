import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, { payload: productItem }) => {
      state.cartItems = [productItem, ...state.cartItems];
      toast.success('Ürün sepete eklendi', {
        position: 'top-center',
      });
    },
    removeFromCart: (state, { payload: productId }) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== productId,
      );
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
