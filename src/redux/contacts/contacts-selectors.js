import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.phonebook.contacts;
const getFilter = state => state.phonebook.filter;

const getVisibileContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (contacts && filter) {
      const normalizedFilter = filter.toLowerCase();
      const filteredContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );

      return filteredContact;
    }
    return contacts;
  },
);

const contactsSelectors = {
  getContacts,
  getFilter,
  getVisibileContacts,
};

export default contactsSelectors;
