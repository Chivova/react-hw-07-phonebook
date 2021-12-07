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

export { registration };
