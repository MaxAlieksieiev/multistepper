import { Box, Button } from '@mui/material';

import { FC, useEffect, useState } from 'react';
import { Form,Formik, FormikProps } from 'formik';

import { InputText } from '../../../../components';
import { IAddressDetails } from '../../../../core';
import { IUserState,useUserStore } from '../../../../store/user.store';

import { initialValues, validationSchema } from './data';

export interface IAddressDetailsProps {
  nextStep: () =>  void;
  previousStep: () => void;
}

export const AddressDetails: FC<IAddressDetailsProps> = ({ nextStep, previousStep }) => {
  const [initValues, setInitValues] = useState(initialValues);
  const addressDetails = useUserStore((state: IUserState) => state.addressDetails);
  const addAddressDetails = useUserStore((state: IUserState) => state.addAddressDetails);

  useEffect(() => {
    if(addressDetails) {
      setInitValues({ ...addressDetails });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (data: IAddressDetails) => {
    addAddressDetails(data);
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
        {(props: FormikProps<IAddressDetails>) => (
          <Form>
            <InputText label='Street' name='street' {...props}/>
            <InputText label='City' name='city' {...props} />
            <InputText label='State' name='state' {...props} />
            <InputText label='Zip Code' name='zipCode' {...props} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button color='error' onClick={previousStep} variant='contained'>Previous</Button>
              <Button type='submit' variant='contained'>Next</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
