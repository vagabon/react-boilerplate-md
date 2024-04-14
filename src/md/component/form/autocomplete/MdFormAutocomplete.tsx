import { Autocomplete, FormControl, TextField } from '@mui/material';
import { memo } from 'react';
import { JSONObject } from '../../../../dto/api/ApiDto';
import { IFormPropsDto } from '../../../../dto/form/FormDto';
import { useFormError } from '../../../hook/useFormError';
import MdFormError from '../MdFormError';

export interface IMdFormAutocompleteProps extends IFormPropsDto {
  label: string;
  name: string;
  list: string[];
}

const MdFormAutocomplete: React.FC<IMdFormAutocompleteProps> = memo((props: IMdFormAutocompleteProps) => {
  const { error } = useFormError(props.name, props.errors, props.touched, props.errorMessage);

  return (
    <div style={{ width: '100%' }}>
      <FormControl fullWidth sx={{ marginBottom: '8px', marginTop: '16px' }}>
        <Autocomplete
          id={props.name}
          value={props.values?.[props.name as keyof JSONObject] ?? ''}
          options={props.list}
          sx={{ width: '100%' }}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          renderInput={(params) => <TextField {...params} label={props.label} />}
        />
      </FormControl>

      <MdFormError error={error} />
    </div>
  );
});

MdFormAutocomplete.defaultProps = {};

export default MdFormAutocomplete;
