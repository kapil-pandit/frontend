import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { username: string; password: string }) => {
    const response = await axios.post('http://localhost:5000/auth/login', credentials);
    return response.data;
  },
);

interface AuthState {
  token: string | null;
  user: { username: string; role: string } | null;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.access_token;
      const decodedToken = JSON.parse(atob(action.payload.access_token.split('.')[1]));
      state.user = { username: decodedToken.username, role: decodedToken.role };
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
