import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.js';
import cartReducer from './cartSlice.js';
import authReducer from './authSlice.js';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
