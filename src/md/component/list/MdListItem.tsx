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
        className={className}
        component={component ?? 'div'}
        disablePadding={disablePadding ?? true}
        onClick={callback}
        style={isCursor ? { cursor: 'pointer' } : {}}>
        {children}
      </ListItem>
    );
  },
);
