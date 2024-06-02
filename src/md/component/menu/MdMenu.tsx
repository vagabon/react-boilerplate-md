import { Menu, MenuProps } from '@mui/material';
import React from 'react';

export interface IMdMenuChildrenProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
}

export interface IMdMenuProps extends MenuProps {
  anchorEl: null | HTMLElement;
}

export const MdMenu: React.FC<IMdMenuProps> = ({ anchorEl, ...rest }) => {
  return (
    <>
      <Menu {...rest} anchorEl={anchorEl} />
    </>
  );
};
