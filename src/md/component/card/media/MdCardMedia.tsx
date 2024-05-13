import { CardMedia } from '@mui/material';
import { ReactNode, memo } from 'react';

export interface IMdCardMediaProps {
  children: ReactNode;
}

export const MdCardMedia: React.FC<IMdCardMediaProps> = memo(({ children }) => {
  return <CardMedia>{children}</CardMedia>;
});
