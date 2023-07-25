import * as Yup from 'yup';

export const initialValues = {
  userName: '',
  password: '',
  comparedPassword: ''
};

export const validationSchema = Yup.object().shape({
  userName: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required').min(4, 'Minimum 4 symbols').max(16, 'Maximum 16 symbols'),
  comparedPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Password is required')
});
