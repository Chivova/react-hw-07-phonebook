import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { authOperations, authSelectors } from '../../redux/auth';

const theme = createTheme();
const styles = {
  title: {
    textAlign: 'center',
  },
};

export default function LoginView() {
  const isUserLogInRejected = useSelector(authSelectors.userLogInRejected);
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    dispatch(authOperations.userLogInRejected());
  }, [dispatch]);

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
    <>
      {isUserLogInRejected && <h2>try again</h2>}
      <ThemeProvider theme={theme}>
        <h2 style={styles.title}>Log In Page</h2>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 4,
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
    </>
  );
}
