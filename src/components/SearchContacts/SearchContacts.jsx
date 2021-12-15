import { TextField } from '@mui/material';

export default function SearchContacts() {
  return (
    <TextField
      type="text"
      label="Find Contacts By Name"
      variant="standard"
      name="filter"
    />
  );
}
