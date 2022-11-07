import { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography } from "@mui/material";

import './photo.scss';

const Photo = (props) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <img
        onClick={handleOpen}
        src={props.src} 
        alt="s"
        className="photo"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            More
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <img 
            src={props.src}
            alt="s"
            style={{ 'height' : '100%', 'width' : '100%' }}
          />
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Photo;