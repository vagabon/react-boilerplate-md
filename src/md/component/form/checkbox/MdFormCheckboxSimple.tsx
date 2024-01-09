import { Checkbox, SxProps, Theme } from '@mui/material';
import { SwitchBaseProps } from '@mui/material/internal/SwitchBase';
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

const MdFormCheckboxSimple: React.FC<IMdFormCheckboxSimpleProps> = ({
  name,
  checked,
  disabled,
  callbackClick,
  callbackBlur,
  ...rest
}) => {
  return (
    <Checkbox
      {...rest}
      name={name}
      onClick={callbackClick}
      onBlur={callbackBlur}
      disabled={disabled}
      checked={checked}
    />
  );
};

export default MdFormCheckboxSimple;
