import { List } from '@mui/material';
import { ReactNode } from 'react';

export interface IMdListProps {
  className?: string;
  children: ReactNode;
}
const MdList: React.FC<IMdListProps> = ({ className, children }) => {
  return <List className={className ?? 'modal-list'}>{children}</List>;
};

export default MdList;
