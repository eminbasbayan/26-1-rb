import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, { payload: productItem }) => {
      const findCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === productItem.id,
      );

      if (findCartItem) {
        state.cartItems = state.cartItems.map((cartItem) => {
          if (cartItem.id === findCartItem.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }

          return cartItem;
        });
      } else {
        state.cartItems = [{ ...productItem, quantity: 1 }, ...state.cartItems];
      }

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
