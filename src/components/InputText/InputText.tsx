import { TextField } from '@mui/material';

import { FC } from 'react';
import { useField } from 'formik';

interface IInputText {
  label: string;
  props: any
}

export const InputText: FC<IInputText> =({ label, props }) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      fullWidth
      label={label}
      value={field.value}
      onChange={field.onChange}
      name={field.name}
      error={!!(meta.touched && meta.error)}
      helperText={meta.error}
    />);
};
