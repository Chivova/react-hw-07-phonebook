import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registration = createAsyncThunk(
  'auth/registration',
  async credentials => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/users/signup`,
        credentials,
      );
      token.set(data.token);
      return data;
    } catch (error) {}
  },
);

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/login`, credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post(`${BASE_URL}/users/logout`);
    token.unset();
  } catch (error) {}
});
export { registration, logIn, logOut };

const currentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState()
  const persisteToken = state.auth.token
});
