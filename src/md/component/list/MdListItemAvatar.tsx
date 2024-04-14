import { ListItemAvatar } from '@mui/material';
import { ReactNode, memo } from 'react';

export interface IMdListItemAvatarProps {
  children: ReactNode;
}

const MdListItemAvatar: React.FC<IMdListItemAvatarProps> = memo(({ children }) => {
  return <ListItemAvatar>{children}</ListItemAvatar>;
});

export default MdListItemAvatar;
