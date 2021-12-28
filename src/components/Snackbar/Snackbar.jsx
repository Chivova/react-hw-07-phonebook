import * as React from 'react';
import { useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import { authOperations } from 'redux/auth';

export default function PositionedSnackbar({ element, message }) {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
    switch (element) {
      case 'userLogInRejected':
        dispatch(authOperations.userLogInRejected());
        break;

      case 'registerUserRejected':
        dispatch(authOperations.registerUserRejected());
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
}
