import { Typography } from '@mui/material';
import { memo, useCallback, useEffect, useState } from 'react';
import { JSONObject } from '../../../../dto/api/ApiDto';
import { HandleChangeType, IFormPropsDto } from '../../../../dto/form/FormDto';
import { Translate } from '../../../../translate/component/Translate';
import { useFormError } from '../../../hook/useFormError';
import { MdFormError } from '../MdFormError';
import { MdFormSwitchSimple } from './MdFormSwitchSimple';

export interface IMdFormSwitchProps extends IFormPropsDto {
  className?: string;
  label: string;
  name: string;
  disabled?: boolean;
}

export const MdFormSwitch: React.FC<IMdFormSwitchProps> = memo(({ className = '', ...rest }) => {
  const { error } = useFormError(rest.name, rest.errors, rest.touched, rest.errorMessage);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(rest.values?.[rest.name as keyof JSONObject] === true);
  }, [rest.name, rest.values]);

  const handleChange = useCallback(
    (oldValue: boolean, callback?: HandleChangeType) => () => {
      const newEvent = { target: { name: rest.name, value: !oldValue } };
      callback?.(newEvent);
    },
    [rest.name],
  );

  return (
    <div className={'flex switch ' + className}>
      <div>
        <Typography paragraph={true} onClick={handleChange(checked, rest.handleChange)} className='pointer user-none'>
          <Translate i18nKey={rest.label} />
          {rest.validationSchema?.[rest.name as keyof JSONObject]?.['required'] ? ' *' : ''}
        </Typography>
        <MdFormSwitchSimple
          name={rest.name}
          color='secondary'
          checked={checked}
          callbackChange={handleChange(checked, rest.handleChange)}
          callbackBlur={rest.handleBlur}
          disabled={rest.disabled ?? rest.validationSchema?.[rest.name as keyof JSONObject]?.['disabled']}
        />
      </div>

      <MdFormError error={error} />
    </div>
  );
});
