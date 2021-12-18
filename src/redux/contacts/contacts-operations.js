import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
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

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.deleteContactRequest(id);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

const filterContacts = createAction('contacts/filterContacts');

export { fetchContacts, addContact, deleteContact, filterContacts };
