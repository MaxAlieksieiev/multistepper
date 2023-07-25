import { Button } from '@mui/material';

import { FC } from 'react';

export interface IAccountDetails {
  nextStep: () => void;
  previousStep: () => void;
}

export const AccountDetails: FC<IAccountDetails> = ({ nextStep, previousStep }) => {

  return <div>
    <Button onClick={nextStep}>Next</Button>
    <Button onClick={previousStep}>Previous</Button>
  </div>;
};
