import {
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { memo, useCallback, useEffect, useState } from 'react';
import { IApiDto, JSONObject } from '../../../../dto/api/ApiDto';
import { IFormPropsDto } from '../../../../dto/form/FormDto';
import { useIcon } from '../../../../icon';
import { useAppTranslate } from '../../../../translate';
import { useFormError } from '../../../hook/useFormError';
import MdFormError from '../MdFormError';

interface IListDto {
  value: string | number;
  name: string;
  icon?: string;
}

export interface IMdFormSelectProps extends IFormPropsDto {
  className?: string;
  label: string;
  name: string;
  defaultValue?: boolean;
  list?: IApiDto[];
  listLibelle?: string;
  callBack?: (value?: string | JSONObject) => void;
  disabled?: boolean;
  byId?: boolean;
}

const MdFormSelect: React.FC<IMdFormSelectProps> = memo(({ className = '', defaultValue = true, ...rest }) => {
  const { t } = useAppTranslate();
  const { getIcon } = useIcon();
  const { error } = useFormError(rest.name, rest.errors, rest.touched, rest.errorMessage);

  const [value, setValue] = useState<string>('');
  const [values, setValues] = useState<IListDto[]>([]);

  useEffect(() => {
    const values: IListDto[] = [];
    rest.list?.forEach((value) => {
      const libelle = value[(rest.listLibelle ?? 'libelle') as keyof JSONObject] as string;
      value.id &&
        values.push({
          value: value.id,
          name: libelle?.startsWith('http') ? libelle : t(libelle),
          icon: value['icon' as keyof JSONObject],
        });
    });
    setValues(values);
  }, [rest.list, rest.listLibelle, t]);

  const propsValues = rest.values?.[rest.name as keyof JSONObject] ?? '';
  const validationSchema = rest.validationSchema?.[rest.name as keyof JSONObject] ?? {};

  useEffect(() => {
    setValue(rest.byId === true ? propsValues?.['id' as keyof JSONObject] ?? '' : propsValues ?? '');
  }, [propsValues, rest.byId]);

  const handleChange = useCallback(
    (event: SelectChangeEvent<string | JSONObject | undefined>) => {
      event.preventDefault();
      let value: string | JSONObject | undefined = event.target.value;
      value = rest.byId === true ? { id: value } : value;
      event.target.value = value;
      rest.handleChange?.(event);
      rest.callBack?.(value);
    },
    [rest],
  );

  return (
    <div style={{ width: '100%' }}>
      <FormControl
        className={className}
        fullWidth
        sx={{ marginBottom: '8px', marginTop: '16px' }}
        disabled={rest.disabled ?? rest.validationSchema?.[rest.name as keyof JSONObject]?.['disabled']}>
        <InputLabel id={rest.name + '-label'} error={error !== ''}>
          {t(rest.label)}
          {validationSchema?.['required' as keyof JSONObject] ? ' *' : ''}
        </InputLabel>
        {values && values.length > 0 && (
          <Select
            error={error !== ''}
            labelId={rest.name + '-label'}
            id={rest.name}
            name={rest.name}
            value={value ?? ''}
            required={validationSchema?.['required' as keyof JSONObject]}
            label={rest.label}
            onChange={handleChange}
            className='width100'
            disabled={rest.disabled ?? rest.validationSchema?.[rest.name as keyof JSONObject]?.['disabled']}>
            {defaultValue && <MenuItem value={rest.byId ? '-1' : ''}>Aucun</MenuItem>}
            {values &&
              values.length > 0 &&
              values.map((myValue) => (
                <MenuItem key={myValue.name + myValue.value} value={myValue.value}>
                  {myValue.icon && <ListItemIcon>{getIcon(myValue.icon)}</ListItemIcon>}
                  <ListItemText primary={myValue.name} />
                </MenuItem>
              ))}
          </Select>
        )}
      </FormControl>

      <MdFormError error={error} />
    </div>
  );
});

export default MdFormSelect;
