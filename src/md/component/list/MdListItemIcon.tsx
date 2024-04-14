import { ListItemIcon } from '@mui/material';
import { ReactNode, memo } from 'react';

export interface IMdListItemIconProps {
  children: ReactNode;
}

const MdListItemIcon: React.FC<IMdListItemIconProps> = memo(({ children }) => {
  return <ListItemIcon>{children}</ListItemIcon>;
});

export default MdListItemIcon;
