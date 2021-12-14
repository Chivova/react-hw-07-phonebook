import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ContactsForm() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
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
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          // value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
        <TextField
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
          // value={number}
          required
          onChange={handleChange}
        />
        <button type="submit">Add contact</button>
      </Box>
    </div>
  );
}
