import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { authOperations } from '../../redux/auth';

const theme = createTheme();
const styles = {
  title: {
    textAlign: 'centre',
  },
};

export default function LoginView() {
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setUserEmail(value);
        return;
      case 'password':
        setUserPassword(value);
        return;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      authOperations.logIn({ email: userEmail, password: userPassword }),
    );

    reset();
  };

  const reset = () => {
    setUserEmail('');
    setUserPassword('');
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
              onChange={handleChange}
              value={userEmail}
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
              onChange={handleChange}
              value={userPassword}
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
