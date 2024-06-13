import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { memo, useCallback, useEffect, useState } from 'react';
import { JSONObject } from '../../../../dto/api/ApiDto';
import { HandleChangeType, IFormPropsDto } from '../../../../dto/form/FormDto';
import { useTranslate } from '../../../../translate/hook/useTranslate';
import { useFormError } from '../../../hook/useFormError';

export interface IMdInputDatepickerProps extends IFormPropsDto {
  className?: string;
  label: string;
  name: string;
  disabled?: boolean;
}

export const MdInputDatepicker: React.FC<IMdInputDatepickerProps> = memo(({ className = '', ...rest }) => {
  const { translate } = useTranslate();
  const { error } = useFormError(rest.name, rest.errors, rest.touched, rest.errorMessage);
  const [value, setValue] = useState<Dayjs | undefined>();

  useEffect(() => {
    const newValue = rest.values?.[rest.name as keyof JSONObject] ?? '';
    newValue && setValue(dayjs(newValue));
  }, [rest.values, rest.name]);

  const handleChange = useCallback(
    (callback?: HandleChangeType) => (newValue?: Dayjs | null) => {
      let newValueString: string = '';
      if (newValue) {
        newValueString = JSON.stringify(newValue).replaceAll('\\', '').replaceAll('"', '');
      }
      callback?.({ target: { name: rest.name, value: newValueString } });
    },
    [rest.name],
  );

  return (
    <div className={'width100 ' + className}>
      <DateTimePicker
        className='width100'
        slotProps={{
          textField: {
            variant: 'outlined',
            error: error !== '',
          },
          field: { clearable: true },
        }}
        timezone='Europe/Paris'
        format='DD/MM/YYYY HH:mm:ss'
        ampm={false}
        label={translate(rest.label)}
        name={rest.name}
        onChange={handleChange?.(rest.handleChange)}
        value={value as null | undefined}
        disabled={rest.disabled ?? false}
      />
    </div>
  );
});
