import { Switch, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { JSONObject } from '../../../dto/api/ApiDto';
import { HandleChangeType, IFormPropsDto } from '../../../dto/form/FormDto';
import { useFormError } from '../../hook/useFormError';
import MdFormError from './MdFormError';

export interface IMdFormSwitchProps extends IFormPropsDto {
  className?: string;
  label: string;
  name: string;
}

const MdFormSwitch: React.FC<IMdFormSwitchProps> = (props: IMdFormSwitchProps) => {
  const { error } = useFormError(props.name, props.errors, props.touched, props.errorMessage);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(props.values[props.name as keyof JSONObject] === true);
  }, [props.name, props.values]);

  const handleChange = useCallback(
    (oldValue: boolean, callback: HandleChangeType) => () => {
      const newEvent = { target: { name: props.name, value: !oldValue } };
      callback(newEvent);
    },
    [props.name],
  );

  return (
    <div className={'flex switch ' + props.className}>
      <div>
        <Typography paragraph={true}>
          <Trans i18nKey={props.label} />
          {props.validationSchema?.[props.name as keyof JSONObject]?.['required' as keyof JSONObject] ? ' *' : ''}
        </Typography>
        <Switch
          color='secondary'
          checked={checked}
          onChange={handleChange(checked, props.handleChange)}
          onBlur={props.handleBlur}
        />
      </div>

      <MdFormError error={error} />
    </div>
  );
};

export default MdFormSwitch;
