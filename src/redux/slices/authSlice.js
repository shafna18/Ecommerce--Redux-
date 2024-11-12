import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: true,
  username: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.authenticated = true;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.authenticated = false;
      state.username = null;
    },
  },
});

export const { login, logout } = authSlice.actions;


export default authSlice.reducer;