import { MenuItem, MenuItemProps } from '@mui/material';
import React from 'react';

export interface IMdMenuItemChildrenProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
}

export interface IMdMenuItemProps extends MenuItemProps {}

export const MdMenuItem: React.FC<IMdMenuItemProps> = ({ ...rest }) => {
  return <MenuItem {...rest} />;
};
