import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { toast } from 'react-hot-toast';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const styles = {
  formBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputText: {
    fontWeight: '800',
  },
};
export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const handleChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '' || number === '') {
      return toast.error(`Please, fill in the blank fields`);
    } else if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
      )
    ) {
      return toast.error(`Contact ${name} is already in contacts `);
    } else if (contacts.find(contact => contact.number === number)) {
      return toast.error(`Contact ${number} is already in contacts `);
    }
    dispatch(contactsOperations.addContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Box
        style={styles.formBox}
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          style={styles.inputText}
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
        <TextField
          style={styles.inputText}
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          value={number}
          required={true}
          onChange={handleChange}
        />

        <Button size="medium" type="submit" variant="contained">
          Add Contact
        </Button>
      </Box>
    </div>
  );
}
