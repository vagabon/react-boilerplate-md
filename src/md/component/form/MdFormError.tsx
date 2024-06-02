import { FormHelperText } from '@mui/material';
import { memo } from 'react';

export interface IMdFormErrorProps {
  error: string;
}

export const MdFormError: React.FC<IMdFormErrorProps> = memo(({ error }) => {
  return (
    <>
      {error && (
        <FormHelperText className='margin-05' error={true}>
          {error}
        </FormHelperText>
      )}
    </>
  );
});
