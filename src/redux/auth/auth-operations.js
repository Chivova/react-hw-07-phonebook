import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';

const registration = createAsyncThunk(
  'auth/registration',
  async credentials => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/users/signup`,
        credentials,
      );
      console.log('auth/registration', data);
      return data;
    } catch (error) {}
  },
);

export default registration;
