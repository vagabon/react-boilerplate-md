import { Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { JSONObject } from '../../../../dto/api/ApiDto';
import { HandleChangeType, IFormPropsDto } from '../../../../dto/form/FormDto';
import { useAppTranslate } from '../../../../translate/hook/useAppTranslate';
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
  const { t } = useAppTranslate();
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
    <div className='flex flex-row align-center' style={{ height: '50px' }}>
      <Typography paragraph={true} style={{ flex: '1', cursor: 'pointer' }} onClick={handleClicklabel}>
        {rest.label && t(rest.label)}
      </Typography>
      <MdFormCheckboxSimple
        name={rest.name}
        className={rest.className}
        checked={rest.values?.[rest.name as keyof JSONObject] === true}
        callbackClick={handleChange?.(rest.handleChange)}
        callbackBlur={rest.handleBlur}
        inputProps={{ 'aria-label': 'controlled' }}
        sx={{ padding: '0px 2px' }}
        disabled={rest.disabled}
      />

      <MdFormError error={error} />
    </div>
  );
});
