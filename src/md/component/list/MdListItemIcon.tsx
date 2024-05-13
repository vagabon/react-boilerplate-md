import { ListItemIcon } from '@mui/material';
import { ReactNode, memo } from 'react';

export interface IMdListItemIconProps {
  children: ReactNode;
}

export const MdListItemIcon: React.FC<IMdListItemIconProps> = memo(({ children }) => {
  return <ListItemIcon>{children}</ListItemIcon>;
});
