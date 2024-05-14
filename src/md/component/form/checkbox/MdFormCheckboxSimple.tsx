import { Checkbox, SxProps, Theme } from '@mui/material';
import { MouseEvent, memo } from 'react';
import { HandleBlurType } from '../../../../dto/form/FormDto';
import { SwitchBaseProps } from '@mui/material/internal/SwitchBase';

export interface IMdFormCheckboxSimpleProps {
  className?: string;
  name: string;
  edge?: 'start' | 'end' | false;
  checked: boolean;
  inputProps?: SwitchBaseProps['inputProps'];
  sx?: SxProps<Theme>;
  callbackClick?: () => void;
  callbackBlur?: HandleBlurType;
  disabled?: boolean;
  disableRipple?: boolean;
}

export const MdFormCheckboxSimple: React.FC<IMdFormCheckboxSimpleProps> = memo(
  ({ name, checked, disabled, callbackClick, callbackBlur, ...rest }) => {
    const handleClick = (callbackClick?: () => void) => (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      callbackClick?.();
    };

    return (
      <Checkbox
        {...rest}
        name={name}
        onClick={handleClick(callbackClick)}
        onBlur={callbackBlur}
        disabled={disabled}
        checked={checked}
      />
    );
  },
);
