import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const styles = {
  title: {
    textAlign: 'centre',
  },
};
export default function LoginView() {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <h1 style={styles.title}>Log In Page</h1>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
// export default function LoginView() {
//   return (
//     <div>
//       <h1>Страница логина</h1>

//       <form autoComplete="off">
//         <label>
//           Почта
//           <input
//             type="email"
//             name="email"
//             // value={email}
//             // onChange={handleChange}
//           />
//         </label>

//         <label>
//           Пароль
//           <input
//             type="password"
//             name="password"
//             // value={password}
//             // onChange={handleChange}
//           />
//         </label>

//         <button type="submit">Войти</button>
//       </form>
//     </div>
//   );
// }
