import { Box, Step, StepLabel,Stepper } from '@mui/material';

import { useMemo, useState } from 'react';

import { AccountDetails, AddressDetails, UserDetails } from './components';
import { STEPS } from './data';

export const MultiForm = () => {
  const [step, setStep] = useState(0);
  const totalSteps = STEPS.length;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isLastStep = useMemo(() => totalSteps - 1 === step, [totalSteps, step]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const currentLayout = useMemo(() => {
    switch(step) {
    case 0:
      return <UserDetails nextStep={nextStep} />;
    case 1:
      return <AddressDetails nextStep={nextStep} previousStep={previousStep} />;
    case 2:
      return <AccountDetails nextStep={nextStep} previousStep={previousStep} />;
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
    </Box>
  );
};


