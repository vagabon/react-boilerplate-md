import { Divider } from '@mui/material';
import { ElementType, memo } from 'react';

export interface IMdDividerProps {
  margin?: boolean;
  component?: ElementType;
  variant?: 'fullWidth' | 'inset' | 'middle';
}

const MdDivider: React.FC<IMdDividerProps> = memo(({ margin, component, variant }) => {
  return <Divider component={component ?? 'div'} variant={variant} className={margin ? 'divider-margin' : ''} />;
});

export default MdDivider;
