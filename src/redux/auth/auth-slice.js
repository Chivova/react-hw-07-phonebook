import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // [authOperations.registration.fullfield](state, { payload }) {
    //   state.user = payload.user;
    // },
  },
});

export default authSlice.reducer;
