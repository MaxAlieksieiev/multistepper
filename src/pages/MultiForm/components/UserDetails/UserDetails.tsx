import { Button } from '@mui/material';

import { FC } from 'react';

export interface IUserDetailsProps {
  nextStep: () => void,
}

export const UserDetails: FC<IUserDetailsProps> = ({ nextStep }) => {

  return <Button onClick={nextStep}>Next</Button>;
};
