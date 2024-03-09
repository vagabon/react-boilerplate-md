import { Typography } from '@mui/material';
import { useCallback } from 'react';
import { JSONObject } from '../../../../dto/api/ApiDto';
import { HandleChangeType, IFormPropsDto } from '../../../../dto/form/FormDto';
import { useAppTranslate } from '../../../../translate';
import { useFormError } from '../../../hook/useFormError';
import MdFormError from '../MdFormError';
import MdFormCheckboxSimple from './MdFormCheckboxSimple';

export interface IMdFormCheckboxProps extends IFormPropsDto {
  label?: string;
  name: string;
}

const MdFormCheckbox: React.FC<IMdFormCheckboxProps> = (props: IMdFormCheckboxProps) => {
  const { t } = useAppTranslate();
  const { error } = useFormError(props.name, props.errors, props.touched, props.errorMessage);

  const handleChange = useCallback(
    (callback?: HandleChangeType) => () => {
      const checkked = props.values?.[props.name as keyof JSONObject] !== true;
      const newEvent = {
        target: {
          name: props.name,
          value: checkked,
        },
      };
      callback?.(newEvent);
    },
    [props.name, props.values],
  );

  const handleClicklabel = useCallback(() => {
    handleChange?.(props.handleChange)();
  }, [props, handleChange]);

  return (
    <div className='flex flex-row align-center' style={{ height: '50px' }}>
      <Typography paragraph={true} style={{ flex: '1', cursor: 'pointer' }} onClick={handleClicklabel}>
        {props.label && t(props.label)}
      </Typography>
      <MdFormCheckboxSimple
        name={props.name}
        checked={props.values?.[props.name as keyof JSONObject] === true}
        callbackClick={handleChange?.(props.handleChange)}
        callbackBlur={props.handleBlur}
        inputProps={{ 'aria-label': 'controlled' }}
        sx={{ padding: '0px 2px' }}
      />

      <MdFormError error={error} />
    </div>
  );
};

export default MdFormCheckbox;
