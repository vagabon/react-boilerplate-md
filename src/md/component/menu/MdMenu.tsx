import { Button, Menu, MenuItem } from '@mui/material';
import React, { useCallback } from 'react';

export interface IMdMenuProps {
  title: JSX.Element;
  elements: { name: string; element: JSX.Element }[];
}

const MdMenu: React.FC<IMdMenuProps> = ({ title, elements }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        {title}
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {elements.map((element) => (
          <MenuItem key={element.name} onClick={handleClose}>
            {element.element}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MdMenu;
