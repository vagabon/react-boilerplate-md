import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { memo, useCallback, useEffect, useState } from 'react';
import { JSONObject } from '../../../../dto/api/ApiDto';
import { HandleChangeType, IFormPropsDto } from '../../../../dto/form/FormDto';
import { useAppTranslate } from '../../../../translate';
import { useFormError } from '../../../hook/useFormError';

export interface IMdInputDatepickerProps extends IFormPropsDto {
  className?: string;
  label: string;
  name: string;
  disabled?: boolean;
}

const MdInputDatepicker: React.FC<IMdInputDatepickerProps> = memo(({ className = '', ...rest }) => {
  const { t } = useAppTranslate();
  const { error } = useFormError(rest.name, rest.errors, rest.touched, rest.errorMessage);
  const [value, setValue] = useState<Dayjs | undefined>();

  useEffect(() => {
    const newValue = rest.state?.[rest.name as keyof JSONObject] ?? '';
    newValue && setValue(dayjs(newValue));
  }, [rest.state, rest.name]);

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
    <div style={{ width: '100%' }} className={className}>
      <DateTimePicker
        slotProps={{
          textField: {
            variant: 'outlined',
            error: error !== '',
          },
          field: { clearable: true },
        }}
        format='DD/MM/YYYY HH:mm:ss'
        ampm={false}
        sx={{ width: '100%' }}
        label={t(rest.label)}
        name={rest.name}
        onChange={handleChange?.(rest.handleChange)}
        value={value}
        disabled={rest.disabled ?? false}
      />
    </div>
  );
});

export default MdInputDatepicker;
