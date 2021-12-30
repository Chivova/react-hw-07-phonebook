import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { contactsOperations } from 'redux/contacts';

export default function EditContact() {
  const [updateName, setUpdateName] = useState('');
  const [updateNumber, setUpdateNumber] = useState('');
  const dispatch = useDispatch();
  // const contactId = useSelector(contactsOperations.getContactId);
  // const contacts = useSelector(contactsOperations.getContacts);
  // const contact = contacts.find(contact => contact.id === contactId);

  const handleChange = e => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case 'name':
        setUpdateName(value);
        break;
      case 'number':
        setUpdateNumber(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      // contactId,
      contact: {
        name: updateName,
        number: updateNumber,
      },
    };
    dispatch(contactsOperations.updateContact(data));
    console.log(data);
  };
  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{ '& > :not(style)': { m: 2, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={handleChange}
        id="standard-basic"
        label="Name"
        variant="standard"
        name="name"
        value={updateName}
      />
      <TextField
        onChange={handleChange}
        id="standard-basic"
        label="Number"
        variant="standard"
        name="number"
        value={updateNumber}
      />
      <Button type="submit">
        <SaveAsIcon color="info" />
      </Button>
    </Box>
  );
}
