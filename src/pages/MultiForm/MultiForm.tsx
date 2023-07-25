import { Box, Step, StepLabel,Stepper } from '@mui/material';

import { useMemo, useState } from 'react';
import { CustomModal } from 'components/index';
import { IStepperState, useStepperStore } from 'store/index';

import { AccountDetails, AddressDetails, UserDetails } from './components';
import { STEPS } from './data';

export const MultiForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const step = useStepperStore((state: IStepperState) => state.currentStep);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const currentLayout = useMemo(() => {
    switch(step) {
    case 0:
      return <UserDetails />;
    case 1:
      return <AddressDetails/>;
    case 2:
      return <AccountDetails openModal={handleOpen}  />;
    default:
      return <UserDetails />;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <Box sx={{ width: '100%', padding: '20px' }}>
      <Stepper activeStep={step} alternativeLabel>
        {STEPS.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ margin: '0 auto', width: '500px' }}>
        {currentLayout}
      </Box>
      {isOpen && <CustomModal isOpen={isOpen} title='You successful registrate' handleClose={handleClose} />}
    </Box>
  );
};


