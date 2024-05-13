import { Divider } from '@mui/material';
import { ElementType, memo } from 'react';

export interface IMdDividerProps {
  className?: string;
  margin?: boolean;
  component?: ElementType;
  variant?: 'fullWidth' | 'inset' | 'middle';
}

export const MdDivider: React.FC<IMdDividerProps> = memo(({ className, margin, component, variant }) => {
  return (
    <Divider
      className={className + ' ' + (margin ? 'divider-margin' : '')}
      component={component ?? 'div'}
      variant={variant}
    />
  );
});
