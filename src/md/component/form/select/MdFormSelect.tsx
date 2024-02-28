import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { IApiDto, JSONObject } from '../../../../dto/api/ApiDto';
import { IFormPropsDto } from '../../../../dto/form/FormDto';
import { useAppTranslate } from '../../../../translate';
import { useFormError } from '../../../hook/useFormError';
import MdFormError from '../MdFormError';

interface IListDto {
  value: string | number;
  name: string;
}

export interface IMdFormSelectProps extends IFormPropsDto {
  label: string;
  name: string;
  defaultValue?: boolean;
  list?: IApiDto[];
  listLibelle?: string;
  callBack?: (value?: string | JSONObject) => void;
  disabled?: boolean;
  byId?: boolean;
}

const MdFormSelect: React.FC<IMdFormSelectProps> = ({ defaultValue = true, ...props }) => {
  const { t } = useAppTranslate();
  const { error } = useFormError(props.name, props.errors, props.touched, props.errorMessage);

  const [value, setValue] = useState<string>('');
  const [values, setValues] = useState<IListDto[]>([]);

  useEffect(() => {
    const values: IListDto[] = [];
    props.list?.forEach((value) => {
      value.id &&
        values.push({ value: value.id, name: t(value[(props.listLibelle ?? 'libelle') as keyof JSONObject]) });
    });
    setValues(values);
  }, [props.list, props.listLibelle, t]);

  const propsValues = props.values?.[props.name as keyof JSONObject] ?? '';
  const validationSchema = props.validationSchema?.[props.name as keyof JSONObject] ?? {};

  useEffect(() => {
    setValue(props.byId === true ? propsValues?.['id' as keyof JSONObject] ?? '' : propsValues ?? '');
  }, [propsValues, props.byId]);

  const handleChange = useCallback(
    (event: SelectChangeEvent<string | JSONObject | undefined>) => {
      event.preventDefault();
      let value: string | JSONObject | undefined = event.target.value;
      value = props.byId === true ? { id: value } : value;
      event.target.value = value;
      props.handleChange?.(event);
      props.callBack?.(value);
    },
    [props],
  );

  return (
    <div style={{ width: '100%' }}>
      <FormControl fullWidth sx={{ marginBottom: '8px', marginTop: '16px' }} disabled={props.disabled}>
        <InputLabel id={props.name + '-label'} error={error !== ''}>
          {t(props.label)}
          {validationSchema?.['required' as keyof JSONObject] ? ' *' : ''}
        </InputLabel>
        {values && values.length > 0 && (
          <Select
            error={error !== ''}
            labelId={props.name + '-label'}
            id={props.name}
            name={props.name}
            value={value ?? ''}
            required={validationSchema?.['required' as keyof JSONObject]}
            label={props.label}
            onChange={handleChange}
            className='width100'>
            {defaultValue && <MenuItem value={props.byId ? '-1' : ''}>Aucun</MenuItem>}
            {values &&
              values.length > 0 &&
              values.map((myValue) => (
                <MenuItem key={myValue.name + myValue.value} value={myValue.value}>
                  {myValue.name}
                </MenuItem>
              ))}
          </Select>
        )}
      </FormControl>

      <MdFormError error={error} />
    </div>
  );
};

MdFormSelect.defaultProps = {};

export default MdFormSelect;
