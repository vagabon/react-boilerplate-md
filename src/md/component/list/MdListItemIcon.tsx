import { ListItemIcon, ListItemIconProps } from '@mui/material';
import { ReactNode, memo } from 'react';

export interface IMdListItemIconProps extends ListItemIconProps {
  children: ReactNode;
}

export const MdListItemIcon: React.FC<IMdListItemIconProps> = memo(({ children, ...rest }) => {
  return <ListItemIcon {...rest}>{children}</ListItemIcon>;
});
