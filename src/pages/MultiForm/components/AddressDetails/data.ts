import * as Yup from 'yup';

export const initialValues = {
  street: '',
  city: '',
  state: '',
  zipCode: ''
};

export const validationSchema = Yup.object().shape({
  street: Yup.string().required('Street is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode:  Yup.string().required('Zip is required')
});

