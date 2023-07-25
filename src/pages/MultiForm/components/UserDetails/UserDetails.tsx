/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button } from '@mui/material';

import { FC, useEffect,useState } from 'react';
import { Form, Formik, FormikProps } from 'formik';

import { InputText } from '../../../../components';
import { IUserDetails } from '../../../../core';
import { IUserState, useUserStore } from '../../../../store/user.store';

import { initialValues, validationSchema } from './data';

export interface IUserDetailsProps {
  nextStep: () => void,
}



export const UserDetails: FC<IUserDetailsProps> = ({ nextStep }) => {

  const [initValues, setInitValues] = useState(initialValues);
  const userDetails = useUserStore((state: IUserState) => state.userDetails);
  const addUserDetails = useUserStore((state: IUserState) => state.addUserDetails);

  useEffect(() => {
    if(userDetails) {
      setInitValues({ ...userDetails });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (data: IUserDetails) => {
    addUserDetails(data);
    nextStep();
  };

  return (
    <Box sx={{ marginTop: '10px' }}>
      <Formik
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {(props: FormikProps<IUserDetails>) => (
          <Form>
            <InputText label='First Name' name='firstName' {...props}/>
            <InputText label='Last Name' name='lastName' {...props} />
            <InputText label='Email' name='email' {...props} />
            <Button type='submit' variant='contained'>Next</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

