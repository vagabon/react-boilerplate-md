import { Divider } from '@mui/material';
import { ElementType, memo } from 'react';

export interface IMdDividerProps {
  component?: ElementType;
  variant?: 'fullWidth' | 'inset' | 'middle';
}

const MdDivider: React.FC<IMdDividerProps> = memo(({ component, variant }) => {
  return <Divider component={component ?? 'div'} variant={variant} />;
});

export default MdDivider;
