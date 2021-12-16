import { combineReducers } from 'redux'
import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from '../contacts';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled]: (_, { payload }) => payload,
    [contactsOperations.addContact.fulfilled]: (state, { payload }) => [
      ...state,
      payload,
    ],
  },
});
const contactsFilterSlice = createSlice({
  name: 'filter',
  extraReducers: {},
});

const phonebookReducer = combineReducers({
contacts: contactsSlice.reducer,
filter: contactsFilterSlice.reduxer,
})
export default phonebookReducer;
