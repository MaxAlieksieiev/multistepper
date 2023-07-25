import { Box, Step, StepLabel,Stepper } from '@mui/material';

import { useMemo, useState } from 'react';

import { CustomModal } from '../../components';

import { AccountDetails, AddressDetails, UserDetails } from './components';
import { STEPS } from './data';

export const MultiForm = () => {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const resetStep = () => setStep(0);

  const currentLayout = useMemo(() => {
    switch(step) {
    case 0:
      return <UserDetails nextStep={nextStep} />;
    case 1:
      return <AddressDetails nextStep={nextStep} previousStep={previousStep} />;
    case 2:
      return <AccountDetails nextStep={nextStep} previousStep={previousStep} openModal={handleOpen} resetStep={resetStep} />;
    default:
      return <UserDetails nextStep={nextStep} />;
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


