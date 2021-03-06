import * as React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditContact from 'components/EditContact/EditContact';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

export default function EditModal() {
  const isOpenModal = useSelector(contactsSelectors.getIsModalOpen);
  const dispatch = useDispatch();

  const handleCloseModal = () => dispatch(contactsOperations.closeModal());
  return (
    <div>
      <Modal
        open={isOpenModal}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit contact
          </Typography>
          <EditContact />
        </Box>
      </Modal>
    </div>
  );
}
