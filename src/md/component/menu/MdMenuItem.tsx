import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Fragment, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppRouter } from '../../../router';

export interface IMdMenuItemProps {
  name: string;
  url: string;
  childrens: { title: string; link: string }[] | undefined;
}

const MdMenuItem: React.FC<IMdMenuItemProps> = (props: IMdMenuItemProps) => {
  const { navigate } = useAppRouter();
  const [anchorEl, setAnchorEl] = useState<Element>();
  const open = Boolean(anchorEl);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      event.preventDefault();
      setAnchorEl(event.currentTarget);
      !props.childrens && navigate(props.url);
    },
    [navigate, props.childrens, props.url],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(undefined);
  }, []);

  const handleCloseWithUrl = useCallback(
    (url: string) => () => {
      setAnchorEl(undefined);
      navigate(url);
    },
    [navigate],
  );

  return (
    <Fragment>
      <Button
        href={props.url}
        sx={{ minWidth: '100px' }}
        id='fade-button'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={props.childrens && <KeyboardArrowDownIcon />}
        color='secondary'>
        {props.name}
      </Button>
      {props.childrens && (
        <Menu id='fade-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
          {props.childrens?.map((child: { title: string; link: string }) => (
            <MenuItem
              component={Link}
              to={child.link}
              key={child.title}
              color='secondary'
              onClick={handleCloseWithUrl(child.link)}
              sx={{ width: '100px', color: 'secondary.main' }}>
              {child.title}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Fragment>
  );
};

export default MdMenuItem;
