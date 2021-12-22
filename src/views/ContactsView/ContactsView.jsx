import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';
import SearchContacts from 'components/SearchContacts';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: { fontSize: '42px', textAlign: 'center', color: '#1976d2' },
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
