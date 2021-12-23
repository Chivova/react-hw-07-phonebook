import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

const styles = {
  contactsList: {
    width: '350px',
    listStyle: 'none',
  },
  contactsItem: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '5px',
    fontSize: '18px',
    fontWeight: '500',
  },
  contactsButton: {
    marginRight: '15px',
  },
};

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getVisibileContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch, contacts]);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul style={styles.contactsList}>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li style={styles.contactsItem} key={id}>
            {name}: {number}
            <Stack direction="row" spacing={1}>
              <IconButton
                aria-label="delete"
                onClick={() => onDeleteContact(id)}
              >
                <DeleteIcon color={'error'} />
              </IconButton>
            </Stack>
          </li>
        ))}
    </ul>
  );
}
