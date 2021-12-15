import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';
import SearchContacts from 'components/SearchContacts';

export default function ContactsView() {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactsForm />
      <ContactsList />
      <SearchContacts />
    </div>
  );
}
