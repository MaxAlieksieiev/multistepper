import * as Yup from 'yup';

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required(' Last Name is required'),
  email: Yup.string().email('Email is incorrect').required('Email is required')
});
