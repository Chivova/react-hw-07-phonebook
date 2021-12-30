import { Fragment } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import EditModal from '../Modal';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

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
  }, [dispatch]);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  const onUpdateContact = id => dispatch(contactsOperations.updateContact(id));

  const handleOpenModal = () => {
    dispatch(contactsOperations.openModal());
  };

  return (
    <Fragment>
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
                <IconButton
                  sx={{ ml: 0 }}
                  aria-label="edit"
                  // onClick={handleOpenModal}
                  onClick={() => onUpdateContact(id)}
                >
                  <EditIcon color={'primary'} />
                </IconButton>
              </Stack>
            </li>
          ))}
      </ul>
      <EditModal />
    </Fragment>
  );
}
