import { Switch } from '@mui/material';
import { HandleBlurType } from '../../../../dto/form/FormDto';

export interface IMdFormSwitchSimpleProps {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
  name: string;
  checked?: boolean;
  callbackChange: () => void;
  callbackBlur: HandleBlurType;
}

const MdFormSwitchSimple: React.FC<IMdFormSwitchSimpleProps> = ({
  name,
  color,
  checked,
  callbackChange,
  callbackBlur,
}) => {
  return <Switch color={color} name={name} checked={checked} onChange={callbackChange} onBlur={callbackBlur} />;
};

export default MdFormSwitchSimple;
