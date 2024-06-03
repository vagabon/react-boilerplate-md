import { Checkbox, CheckboxProps } from '@mui/material';
import { MouseEvent, memo } from 'react';
import { HandleBlurType } from '../../../../dto/form/FormDto';

export interface IMdFormCheckboxSimpleProps extends CheckboxProps {
  className?: string;
  name: string;
  edge?: 'start' | 'end' | false;
  checked: boolean;
  callbackClick?: () => void;
  callbackBlur?: HandleBlurType;
  disableRipple?: boolean;
}

export const MdFormCheckboxSimple: React.FC<IMdFormCheckboxSimpleProps> = memo(
  ({ name, checked, callbackClick, callbackBlur, ...rest }) => {
    const handleClick = (callbackClick?: () => void) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      callbackClick?.();
    };

    return (
      <Checkbox {...rest} name={name} onClick={handleClick(callbackClick)} onBlur={callbackBlur} checked={checked} />
    );
  },
);
