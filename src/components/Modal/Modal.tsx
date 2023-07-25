import { Box, Dialog, Typography } from '@mui/material';

import { FC } from 'react';

interface ICustomModalProps {
  isOpen: boolean;
  title: string;
  handleClose: () => void;
}

export const CustomModal: FC<ICustomModalProps> = ({ isOpen, title, handleClose }) => (
  <Dialog open={isOpen} onClose={handleClose}>
    <Box sx={{ backgroundColor: 'white', padding: '20px' }}>
      <Typography>{title}</Typography>
    </Box>
  </Dialog>
);
