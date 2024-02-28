import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useEffect, useState } from 'react';
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

const MdInputDatepicker: React.FC<IMdInputDatepickerProps> = ({ className = '', ...props }) => {
  const { t } = useAppTranslate();
  const { error } = useFormError(props.name, props.errors, props.touched, props.errorMessage);
  const [value, setValue] = useState<Dayjs | string | undefined>();

  useEffect(() => {
    const newValue = props.state?.[props.name as keyof JSONObject] ?? '';
    newValue && setValue(dayjs(newValue));
  }, [props.state, props.name]);

  const handleChange = useCallback(
    (callback?: HandleChangeType) => (newValue?: string | null) => {
      let newValueString: string = '';
      if (newValue) {
        newValueString = JSON.stringify(newValue).replaceAll('\\', '').replaceAll('"', '');
      }
      callback?.({ target: { name: props.name, value: newValueString } });
    },
    [props.name],
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
        label={t(props.label)}
        name={props.name}
        onChange={handleChange?.(props.handleChange)}
        value={(value as string) ?? ''}
        disabled={props.disabled ?? false}
      />
    </div>
  );
};

export default MdInputDatepicker;
