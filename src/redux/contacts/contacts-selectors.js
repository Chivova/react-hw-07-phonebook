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
