import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from '../contacts';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.addContact.fulfilled]: (state, { payload }) => [
      ...state,
      payload,
    ],
  },
});

export default contactsSlice.reducer;
