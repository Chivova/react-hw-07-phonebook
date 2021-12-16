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
    [contactsOperations.deleteContact.fulfilled]: (state, { payload }) => [
      state.filter(({ id }) => id !== payload),
    ],
  },
});

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  extraReducers: {
    [contactsOperations.filterContacts]: (_, { payload }) => payload,
  },
});

const phonebookReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: contactsFilterSlice.reducer,
});
export default phonebookReducer;
