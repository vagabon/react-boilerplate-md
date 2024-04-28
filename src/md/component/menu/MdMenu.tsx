import { Button, Menu, MenuItem, SxProps, Theme } from '@mui/material';
import React, { useCallback } from 'react';
import { ButtonColorType } from '../button/MdButton';

export interface IMdMenuProps {
  className?: string;
  title: React.JSX.Element;
  elements: { name: string; element: React.JSX.Element }[];
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  color?: ButtonColorType;
  sx?: SxProps<Theme>;
}

const MdMenu: React.FC<IMdMenuProps> = ({ title, elements, className = '', size, variant, color, sx }) => {
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
        className={className}
        size={size ?? 'small'}
        variant={variant}
        color={color ?? 'primary'}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={sx}>
        {title}
      </Button>
      <Menu
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
