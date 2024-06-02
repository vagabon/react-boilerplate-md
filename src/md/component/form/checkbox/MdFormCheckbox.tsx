import { Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { JSONObject } from '../../../../dto/api/ApiDto';
import { HandleChangeType, IFormPropsDto } from '../../../../dto/form/FormDto';
import { useTranslate } from '../../../../translate/hook/useTranslate';
import { useFormError } from '../../../hook/useFormError';
import { MdFormError } from '../MdFormError';
import { MdFormCheckboxSimple } from './MdFormCheckboxSimple';

export interface IMdFormCheckboxProps extends IFormPropsDto {
  className?: string;
  label?: string;
  name: string;
  disabled?: boolean;
}

export const MdFormCheckbox: React.FC<IMdFormCheckboxProps> = memo(({ ...rest }) => {
  const { translate } = useTranslate();
  const { error } = useFormError(rest.name, rest.errors, rest.touched, rest.errorMessage);

  const handleChange = useCallback(
    (callback?: HandleChangeType) => () => {
      const checkked = rest.values?.[rest.name as keyof JSONObject] !== true;
      const newEvent = {
        target: {
          name: rest.name,
          value: checkked,
        },
      };
      callback?.(newEvent);
    },
    [rest.name, rest.values],
  );

  const handleClicklabel = useCallback(() => {
    handleChange?.(rest.handleChange)();
  }, [rest, handleChange]);

  return (
    <div className='flex flex-row align-center heigth50px'>
      <Typography className='flex1 pointer' paragraph={true} onClick={handleClicklabel}>
        {rest.label && translate(rest.label)}
      </Typography>
      <MdFormCheckboxSimple
        name={rest.name}
        className={'form-checkbox ' + rest.className}
        checked={rest.values?.[rest.name as keyof JSONObject] === true}
        callbackClick={handleChange?.(rest.handleChange)}
        callbackBlur={rest.handleBlur}
        inputProps={{ 'aria-label': 'controlled' }}
        disabled={rest.disabled}
      />

      <MdFormError error={error} />
    </div>
  );
});
