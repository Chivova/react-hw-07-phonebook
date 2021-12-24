import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from '../auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshCurrentUser: false,
  registerUserRejected: false,
  userLogInRejected: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.registration.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.registration.rejected](state, _) {
      console.log(state.registerUserRejected);
      state.registerUserRejected = true;
    },
    [authOperations.registerUserRejected](state, _) {
      state.registerUserRejected = false;
    },

    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, _) {
      console.log('LogInRejected', state.userLogInRejected);
      state.userLogInRejected = true;
    },
    [authOperations.userLogInRejected](state, _) {
      state.userLogInRejected = false;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.currentUser.pending](state) {
      state.isRefreshCurrentUser = true;
    },

    [authOperations.currentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshCurrentUser = false;
    },
    [authOperations.currentUser.rejected](state) {
      state.isRefreshCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
