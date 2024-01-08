import { CardMedia } from '@mui/material';
import { ReactNode } from 'react';

export interface IMdCardMediaProps {
  children: ReactNode;
}

const MdCardMedia: React.FC<IMdCardMediaProps> = ({ children }) => {
  return <CardMedia>{children}</CardMedia>;
};

export default MdCardMedia;
