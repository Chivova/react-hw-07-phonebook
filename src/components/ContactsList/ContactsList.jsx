import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="delete">
                <DeleteIcon color={'error'} />
              </IconButton>
            </Stack>
          </li>
        ))}
    </ul>
  );
}
