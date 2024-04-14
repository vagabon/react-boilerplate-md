import { Checkbox, SxProps, Theme } from '@mui/material';
import { SwitchBaseProps } from '@mui/material/internal/SwitchBase';
import { MouseEvent, memo } from 'react';
import { HandleBlurType } from '../../../../dto';

export interface IMdFormCheckboxSimpleProps {
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

const MdFormCheckboxSimple: React.FC<IMdFormCheckboxSimpleProps> = memo(
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

export default MdFormCheckboxSimple;
