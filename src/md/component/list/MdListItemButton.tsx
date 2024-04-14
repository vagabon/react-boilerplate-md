import { ListItemButton } from '@mui/material';
import { ReactNode, memo } from 'react';

export interface IMdListItemButtonProps {
  callback?: () => void;
  children: ReactNode;
}
const MdListItemButton: React.FC<IMdListItemButtonProps> = memo(({ callback, children }) => {
  return <ListItemButton onClick={callback}>{children}</ListItemButton>;
});

export default MdListItemButton;
