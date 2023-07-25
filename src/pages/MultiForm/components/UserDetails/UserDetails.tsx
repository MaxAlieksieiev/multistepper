/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button } from '@mui/material';

import { FC, useEffect,useState } from 'react';
import { InputText } from 'components/index';
import { IUserDetails } from 'core/index';
import { Form, Formik, FormikProps } from 'formik';
import { IStepperState, IUserState, useStepperStore, useUserStore } from 'store/index';

import { initialValues, validationSchema } from './data';


export const UserDetails: FC = () => {

  const [initValues, setInitValues] = useState(initialValues);
  const userDetails = useUserStore((state: IUserState) => state.userDetails);
  const addUserDetails = useUserStore((state: IUserState) => state.addUserDetails);
  const nextStep = useStepperStore((state: IStepperState) => state.nextStep);

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

