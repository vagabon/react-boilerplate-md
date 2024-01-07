import { ListItemAvatar } from '@mui/material';
import { ReactNode } from 'react';

export interface IMdListItemAvatarProps {
  children: ReactNode;
}

const MdListItemAvatar: React.FC<IMdListItemAvatarProps> = ({ children }) => {
  return <ListItemAvatar>{children}</ListItemAvatar>;
};

export default MdListItemAvatar;
