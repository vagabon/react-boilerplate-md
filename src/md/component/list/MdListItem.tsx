import { ListItem } from '@mui/material';
import { ReactNode, memo } from 'react';

export interface IMdListItemProps {
  className?: string;
  component?: React.ElementType;
  disablePadding?: boolean;
  callback?: () => void;
  isCursor?: boolean;
  children: ReactNode;
}

export const MdListItem: React.FC<IMdListItemProps> = memo(
  ({ className, component, disablePadding, callback, isCursor, children }) => {
    return (
      <ListItem
        className={className + (isCursor ? ' pointer' : '')}
        component={component ?? 'div'}
        disablePadding={disablePadding ?? true}
        onClick={callback}>
        {children}
      </ListItem>
    );
  },
);
