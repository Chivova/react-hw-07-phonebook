import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import { authOperations, authSelectors } from 'redux/auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
    cursor: 'pointer',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    cursor: 'pointer',
    '&:hover': {
      background: 'blue',
    },
    icon: {
      fill: 'blue',
    },
  },
};

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  return (
    <div style={styles.container}>
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{ width: 32, height: 32 }}
          style={styles.avatar}
          src="/broken-image.jpg"
        />
      </Stack>
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button
        style={styles.button}
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        <LogoutIcon style={styles.icon} fontSize="small" />
      </button>
    </div>
  );
}
