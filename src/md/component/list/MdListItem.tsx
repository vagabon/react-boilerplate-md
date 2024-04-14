import { ListItem } from '@mui/material';
import { ReactNode, memo } from 'react';

export interface IMdListItemProps {
  component?: React.ElementType;
  disablePadding?: boolean;
  callback?: () => void;
  isCursor?: boolean;
  children: ReactNode;
}
const MdListItem: React.FC<IMdListItemProps> = memo(({ component, disablePadding, callback, isCursor, children }) => {
  return (
    <ListItem
      component={component ?? 'div'}
      disablePadding={disablePadding ?? true}
      onClick={callback}
      style={isCursor ? { cursor: 'pointer' } : {}}>
      {children}
    </ListItem>
  );
});

export default MdListItem;
