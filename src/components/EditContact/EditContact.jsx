import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EditContact() {
  return (
    <Box
      component="form"
      sx={{ mb: '3ch', '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Name" variant="standard" />
      <TextField id="standard-basic" label="Tel" variant="standard" />
    </Box>
  );
}
