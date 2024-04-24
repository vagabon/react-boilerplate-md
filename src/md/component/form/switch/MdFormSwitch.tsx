import { Typography } from '@mui/material';
import { memo, useCallback, useEffect, useState } from 'react';
import { JSONObject } from '../../../../dto/api/ApiDto';
import { HandleChangeType, IFormPropsDto } from '../../../../dto/form/FormDto';
import { useAppTranslate } from '../../../../translate';
import { useFormError } from '../../../hook/useFormError';
import MdFormError from '../MdFormError';
import MdFormSwitchSimple from './MdFormSwitchSimple';

export interface IMdFormSwitchProps extends IFormPropsDto {
  className?: string;
  label: string;
  name: string;
  disabled?: boolean;
}

const MdFormSwitch: React.FC<IMdFormSwitchProps> = memo(({ className = '', ...props }) => {
  const { Trans } = useAppTranslate();
  const { error } = useFormError(props.name, props.errors, props.touched, props.errorMessage);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(props.values?.[props.name as keyof JSONObject] === true);
  }, [props.name, props.values]);

  const handleChange = useCallback(
    (oldValue: boolean, callback?: HandleChangeType) => () => {
      const newEvent = { target: { name: props.name, value: !oldValue } };
      callback?.(newEvent);
    },
    [props.name],
  );

  return (
    <div className={'flex switch ' + className}>
      <div>
        <Typography
          paragraph={true}
          onClick={handleChange(checked, props.handleChange)}
          style={{ cursor: 'pointer', userSelect: 'none' }}>
          <Trans i18nKey={props.label} />
          {props.validationSchema?.[props.name as keyof JSONObject]?.['required'] ? ' *' : ''}
        </Typography>
        <MdFormSwitchSimple
          name={props.name}
          color='secondary'
          checked={checked}
          callbackChange={handleChange(checked, props.handleChange)}
          callbackBlur={props.handleBlur}
          disabled={props.disabled ?? props.validationSchema?.[props.name as keyof JSONObject]?.['disabled']}
        />
      </div>

      <MdFormError error={error} />
    </div>
  );
});

export default MdFormSwitch;
