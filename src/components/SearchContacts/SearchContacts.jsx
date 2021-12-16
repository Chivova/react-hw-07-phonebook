import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

export default function SearchContacts() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <TextField
      type="text"
      label="Find Contacts By Name"
      variant="standard"
      name="filter"
      value={value}
      onChange={e =>
        dispatch(contactsOperations.filterContacts(e.target.value))
      }
    />
  );
}
