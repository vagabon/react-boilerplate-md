import { List } from '@mui/material';
import { ReactNode, memo } from 'react';

export interface IMdListProps {
  className?: string;
  children: ReactNode;
}
const MdList: React.FC<IMdListProps> = memo(({ className, children }) => {
  return <List className={className ?? 'modal-list'}>{children}</List>;
});

export default MdList;
