import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
        <TextField
          style={styles.inputText}
          inputProps={{
            inputMode: 'tel',
            // pattern:
            //   '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
            title:
              'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +',
          }}
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
