import { Box, Button } from '@mui/material';

import { FC, useEffect, useState } from 'react';
import { Form,Formik, FormikProps } from 'formik';

import { InputText } from '../../../../components';
import { IAccountDetailsForm } from '../../../../core';
import { IUserState, useUserStore } from '../../../../store/user.store';

import { initialValues, validationSchema } from './data';

export interface IAccountDetailsProps {
  nextStep: () => void;
  previousStep: () => void;
  openModal: () => void;
  resetStep: () => void;
}

export const AccountDetails: FC<IAccountDetailsProps> = ({ previousStep, openModal, resetStep }) => {
  const [initValues, setInitValues] = useState(initialValues);
  const accountDetails = useUserStore((state: IUserState) => state.accountDetails);
  const addAccountDetails = useUserStore((state: IUserState) => state.addAccountDetails);

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
