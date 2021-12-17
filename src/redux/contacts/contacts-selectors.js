const getContacts = state => state.phonebook.contacts;
const getFilter = state => state.phonebook.filter;

const getVisibileContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedContacts = filter.toLocaleLowerCase();

  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedContacts),
  );
};
const contactsSelectors = {
  getContacts,
  getFilter,
  getVisibileContacts,
};

export default contactsSelectors;

// const getVisibileContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     if (contacts && filter) {
//       const normalizedFilter = filter.toLowerCase();
//       const filteredContact = contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter),
//       );

//       return filteredContact;
//     }
//     return contacts;
//   },
// );
