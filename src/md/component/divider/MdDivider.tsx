import { Divider, DividerProps } from '@mui/material';
import { memo } from 'react';

export interface IMdDividerProps extends DividerProps {
  margin?: boolean;
}

export const MdDivider: React.FC<IMdDividerProps> = memo(({ className, margin, component, ...rest }) => {
  return (
    <Divider {...rest} className={className + ' ' + (margin ? 'divider-margin' : '')} component={component ?? 'div'} />
  );
});
