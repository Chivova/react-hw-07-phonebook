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
      const response = await contactsApi.deleteContactRequest(id);
      return response;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

const getIdContact = createAsyncThunk(
  'edit/getIdContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await contactsApi.fetchGetIdContact(id);
      return response;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, contact }, { rejectWithValue }) => {
    try {
      console.log(id);
      const response = await contactsApi.fetchUpdateContact(id, contact);
      return response;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);
const filterContacts = createAction('contacts/filterContacts');
const openModal = createAction('contacts/openModal');
const closeModal = createAction('contacts/closeModal');

export {
  fetchContacts,
  addContact,
  deleteContact,
  getIdContact,
  updateContact,
  filterContacts,
  openModal,
  closeModal,
};
