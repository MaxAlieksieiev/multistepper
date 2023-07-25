import { Button } from '@mui/material';

import { FC } from 'react';

export interface IAddressDetails {
  nextStep: () =>  void;
  previousStep: () => void;
}

export const AddressDetails: FC<IAddressDetails> = ({ nextStep, previousStep }) => {


  return <div>
    <Button onClick={nextStep}>Next</Button>
    <Button onClick={previousStep}>Previous</Button>
  </div>;
};
