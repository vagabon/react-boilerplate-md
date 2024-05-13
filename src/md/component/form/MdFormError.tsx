import { FormHelperText } from '@mui/material';
import { memo } from 'react';

export interface IMdFormErrorProps {
  error: string;
}

export const MdFormError: React.FC<IMdFormErrorProps> = memo(({ error }) => {
  return (
    <>
      {error && (
        <FormHelperText style={{ margin: '0.5rem' }} error={true}>
          {error}
        </FormHelperText>
      )}
    </>
  );
});
