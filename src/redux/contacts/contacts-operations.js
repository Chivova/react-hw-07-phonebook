import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    try {
      const { data } = axios.post(`${BASE_URL}/contacts`, { name, number });
      return data;
    } catch (error) {}
  },
);

export { addContact };
