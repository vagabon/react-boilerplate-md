import { Autocomplete, FormControl, TextField } from '@mui/material';
import { memo } from 'react';
import { JSONObject } from '../../../../dto/api/ApiDto';
import { IFormPropsDto } from '../../../../dto/form/FormDto';
import { useFormError } from '../../../hook/useFormError';
import MdFormError from '../MdFormError';

export interface IMdFormAutocompleteProps extends IFormPropsDto {
  className?: string;
  label: string;
  name: string;
  list: string[];
}

const MdFormAutocomplete: React.FC<IMdFormAutocompleteProps> = memo(({ ...rest }) => {
  const { error } = useFormError(rest.name, rest.errors, rest.touched, rest.errorMessage);

  return (
    <div style={{ width: '100%' }}>
      <FormControl className={rest.className ?? ''} fullWidth sx={{ marginBottom: '8px', marginTop: '16px' }}>
        <Autocomplete
          id={rest.name}
          value={rest.values?.[rest.name as keyof JSONObject] ?? ''}
          options={rest.list}
          sx={{ width: '100%' }}
          onChange={rest.handleChange}
          onBlur={rest.handleBlur}
          renderInput={(params) => <TextField {...params} label={rest.label} />}
        />
      </FormControl>

      <MdFormError error={error} />
    </div>
  );
});

MdFormAutocomplete.defaultProps = {};

export default MdFormAutocomplete;
