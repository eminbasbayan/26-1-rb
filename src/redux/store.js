import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.js';
import cartReducer from './cartSlice.js';
import authReducer from './authSlice.js';
import { apiSlice } from './apiSlice.js';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
