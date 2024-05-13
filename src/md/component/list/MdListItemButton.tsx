import { ListItemButton } from '@mui/material';
import { ReactNode, memo } from 'react';

export interface IMdListItemButtonProps {
  callback?: () => void;
  children: ReactNode;
}

export const MdListItemButton: React.FC<IMdListItemButtonProps> = memo(({ callback, children }) => {
  return <ListItemButton onClick={callback}>{children}</ListItemButton>;
});
