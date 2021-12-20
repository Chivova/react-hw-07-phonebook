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
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/users/signup`,
        credentials,
      );
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/users/login`, credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(`${BASE_URL}/users/logout`);
      token.unset();
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const currentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persisteToken = state.auth.token;

    if (persisteToken === null) {
      return rejectWithValue();
    }
    token.set(persisteToken);

    try {
      const { data } = await axios.get(`${BASE_URL}/users/current`);

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

// расписанный вариант откуда взялся getState
// const currentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   console.log(thunkAPI);
//   const state = thunkAPI.getState();
//   const persisteToken = state.auth.token;

//   if (persisteToken === null) {
//     return thunkAPI.rejectWithValue();
//   }
//   token.set(persisteToken);

//   try {
//     const { data } = await axios.get(`${BASE_URL}/users/current`);

//     return data;
//   } catch (error) {
//     thunkAPI.rejectWithValue(error);
//   }
// });

export { registration, logIn, logOut, currentUser };
