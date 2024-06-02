import { ListItemButton, ListItemButtonProps } from '@mui/material';
import { PropsWithChildren, ReactNode, memo } from 'react';

export interface IMdListItemButtonProps extends ListItemButtonProps, PropsWithChildren {
  to?: string;
  children: ReactNode;
}

export const MdListItemButton: React.FC<IMdListItemButtonProps> = memo(({ children, ...rest }) => {
  return <ListItemButton {...rest}>{children}</ListItemButton>;
});
