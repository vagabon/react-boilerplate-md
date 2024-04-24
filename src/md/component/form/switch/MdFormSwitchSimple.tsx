import { Switch } from '@mui/material';
import { memo } from 'react';
import { HandleBlurType } from '../../../../dto/form/FormDto';

export interface IMdFormSwitchSimpleProps {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
  name: string;
  checked?: boolean;
  disabled?: boolean;
  callbackChange?: () => void;
  callbackBlur?: HandleBlurType;
}

const MdFormSwitchSimple: React.FC<IMdFormSwitchSimpleProps> = memo(
  ({ name, color, checked, disabled, callbackChange, callbackBlur }) => {
    return (
      <Switch
        color={color}
        name={name}
        checked={checked}
        onChange={callbackChange}
        onBlur={callbackBlur}
        disabled={disabled}
      />
    );
  },
);

export default MdFormSwitchSimple;
