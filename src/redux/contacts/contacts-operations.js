import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'services/contacts-api';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();

      return contacts;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);
const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const response = await contactsApi.postContact(name, number);

      return response;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export { fetchContacts, addContact };
