import { Box, Button } from '@mui/material';

import { FC, useEffect, useState } from 'react';
import { InputText } from 'components/index';
import { IAccountDetailsForm } from 'core/index';
import { Form,Formik, FormikProps } from 'formik';
import { IStepperState, IUserState, useStepperStore,useUserStore  } from 'store/index';

import { initialValues, validationSchema } from './data';

export interface IAccountDetailsProps {
  openModal: () => void;
}

export const AccountDetails: FC<IAccountDetailsProps> = ({ openModal }) => {
  const [initValues, setInitValues] = useState(initialValues);
  const accountDetails = useUserStore((state: IUserState) => state.accountDetails);
  const addAccountDetails = useUserStore((state: IUserState) => state.addAccountDetails);
  const resetStep = useStepperStore((state: IStepperState) => state.resetStep);
  const previousStep = useStepperStore((state: IStepperState) => state.previousStep);

  useEffect(() => {
    if(accountDetails) {
      setInitValues({ ...accountDetails, comparedPassword: accountDetails.password });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (data: IAccountDetailsForm) => {
    const { comparedPassword, ...accountDetailsForm } = data;
    addAccountDetails(accountDetailsForm);
    openModal();
    resetStep();
  };

  return (
    <Box sx={{ marginTop: '10px' }}>
      <Formik
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {(props: FormikProps<IAccountDetailsForm>) => (
          <Form>
            <InputText label='Username' name='userName' {...props}/>
            <InputText label='Password' name='password' type='password' {...props} />
            <InputText label='' name='comparedPassword' type='password'  {...props} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button color='error' onClick={previousStep} variant='contained'>Previous</Button>
              <Button type='submit' variant='contained'>Finish</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
