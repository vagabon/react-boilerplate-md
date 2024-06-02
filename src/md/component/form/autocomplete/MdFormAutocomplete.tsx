import { Autocomplete, FormControl, TextField } from '@mui/material';
import { memo } from 'react';
import { JSONObject } from '../../../../dto/api/ApiDto';
import { IFormPropsDto } from '../../../../dto/form/FormDto';
import { useFormError } from '../../../hook/useFormError';
import { MdFormError } from '../MdFormError';

export interface IMdFormAutocompleteProps extends IFormPropsDto {
  className?: string;
  label: string;
  name: string;
  list: string[];
}

export const MdFormAutocomplete: React.FC<IMdFormAutocompleteProps> = memo(({ className = '', ...rest }) => {
  const { error } = useFormError(rest.name, rest.errors, rest.touched, rest.errorMessage);

  return (
    <div className='width100'>
      <FormControl className={'form-control ' + className} fullWidth>
        <Autocomplete
          id={rest.name}
          value={rest.values?.[rest.name as keyof JSONObject] ?? ''}
          options={rest.list}
          className='width100'
          onChange={rest.handleChange}
          onBlur={rest.handleBlur}
          renderInput={(params) => <TextField {...params} label={rest.label} />}
        />
      </FormControl>

      <MdFormError error={error} />
    </div>
  );
});
