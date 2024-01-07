import { FormHelperText } from '@mui/material';

export interface IMdFormErrorProps {
  error: string;
}

const MdFormError: React.FC<IMdFormErrorProps> = ({ error }) => {
  return (
    <>
      {error && (
        <FormHelperText style={{ margin: '0.5rem' }} error={true}>
          {error}
        </FormHelperText>
      )}
    </>
  );
};

export default MdFormError;
