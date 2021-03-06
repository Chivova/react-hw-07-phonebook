import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from '../contacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled]: (_, { payload }) => payload,
    [contactsOperations.addContact.fulfilled]: (state, { payload }) => [
      ...state,
      payload,
    ],
    // [contactsOperations.deleteContact.fulfilled]: (state, { payload }) => {
    //   state.filter(({ id }) => id !== payload);
    // }, // так не работает ????????
    [contactsOperations.deleteContact.fulfilled]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
    [contactsOperations.updateContact.fulfilled]: (state, { payload }) => {
      const contactIndex = state.findIndex(({ id }) => id === payload.id);
      const updatedState = [...state];
      updatedState.splice(contactIndex, 1, payload);
      return updatedState;
    },
  },
});

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  extraReducers: {
    [contactsOperations.filterContacts]: (_, { payload }) => payload,
  },
});

const IsLoadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  extraReducers: {
    [contactsOperations.fetchContacts.pending]: () => true,
    [contactsOperations.fetchContacts.fulfilled]: () => false,
    [contactsOperations.fetchContacts.rejected]: () => false,

    [contactsOperations.addContact.pending]: () => true,
    [contactsOperations.addContact.fulfilled]: () => false,
    [contactsOperations.addContact.rejected]: () => false,

    [contactsOperations.deleteContact.pending]: () => true,
    [contactsOperations.deleteContact.fulfilled]: () => false,
    [contactsOperations.deleteContact.rejected]: () => false,
  },
});

const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: {
    [contactsOperations.fetchContacts.rejected]: (_, { payload }) => payload,
    [contactsOperations.fetchContacts.pending]: () => null,

    [contactsOperations.addContact.rejected]: (_, { payload }) => payload,
    [contactsOperations.addContact.pending]: () => null,

    [contactsOperations.deleteContact.rejected]: (_, { payload }) => payload,
    [contactsOperations.deleteContact.pending]: () => null,
  },
});
const editContactId = createSlice({
  name: 'edit',
  initialState: null,
  extraReducers: {
    [contactsOperations.getIdContact.fulfilled]: (_, { payload }) => payload,
  },
});
const editModal = createSlice({
  name: 'modal',
  initialState: false,
  extraReducers: {
    [contactsOperations.openModal]: () => true,
    [contactsOperations.closeModal]: () => false,
  },
});
const phonebookReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: contactsFilterSlice.reducer,
  isLoading: IsLoadingSlice.reducer,
  error: errorSlice.reducer,
  contactId: editContactId.reducer,
  isOpenModal: editModal.reducer,
});
export default phonebookReducer;
