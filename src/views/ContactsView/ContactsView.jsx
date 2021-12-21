import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';
import SearchContacts from 'components/SearchContacts';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: '42px', textAlign: 'center' },
};

export default function ContactsView() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contacts</h1>
      <ContactsForm />
      <ContactsList />
      <SearchContacts />
    </div>
  );
}
