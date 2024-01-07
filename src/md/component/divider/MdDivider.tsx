import { Divider } from '@mui/material';
import { ElementType } from 'react';

export interface IMdDividerProps {
  component?: ElementType;
  variant?: 'fullWidth' | 'inset' | 'middle';
}

const MdDivider: React.FC<IMdDividerProps> = ({ component, variant }) => {
  return <Divider component={component ?? 'div'} variant={variant} />;
};

export default MdDivider;
