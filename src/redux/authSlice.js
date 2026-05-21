import { createSlice } from '@reduxjs/toolkit';

const tokenFromStorage = localStorage.getItem('token');

const initialState = {
  token: tokenFromStorage || null,
  isAuthenticated: !!tokenFromStorage,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;

      localStorage.setItem('token', state.token);
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;

      localStorage.removeItem('token');
    },
  },
});

export const { logout, setAuthError, setCredentials } = authSlice.actions;
export default authSlice.reducer;
