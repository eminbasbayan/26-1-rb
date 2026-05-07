import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.js';
import cartReducer from './cartSlice.js';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

export default store;
