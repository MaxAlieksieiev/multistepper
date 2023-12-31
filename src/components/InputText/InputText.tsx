import { TextField } from '@mui/material';

import { FC } from 'react';
import { useField } from 'formik';

interface IInputText {
  label: string;
  name?: string;
  type?: string;
}

export const InputText: FC<IInputText> =({ label, type='text', ...props }) => {
  const [field, meta] = useField(props as any);
  return (
    <TextField
      sx={{ marginBottom: '10px' }}
      type={type}
      fullWidth
      label={label}
      value={field.value}
      onChange={field.onChange}
      name={field.name}
      error={!!(meta.touched && meta.error)}
      helperText={meta.touched && meta.error ? meta.error : ''}
    />);
};
