import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from '../services/authService';

const tokenFromStorage = localStorage.getItem('token');

const initialState = {
  token: tokenFromStorage || null,
  isAuthenticated: !!tokenFromStorage,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await login({
        username: formData.username,
        password: formData.password,
      });

      return response.data;
    } catch {
      return rejectWithValue('Giriş işlemi sırasında hata oluştu');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;

      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;

        localStorage.setItem('token', state.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
