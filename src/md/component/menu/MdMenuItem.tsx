import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Menu, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import { Fragment, memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppRouter } from '../../../router';

export interface IMdMenuItemProps {
  name: string;
  url: string;
  currentLocation?: string;
  childrens: { title: string; link: string }[] | undefined;
}

const MdMenuItem: React.FC<IMdMenuItemProps> = memo(({ ...rest }) => {
  const { navigate } = useAppRouter();
  const [anchorEl, setAnchorEl] = useState<Element>();
  const open = Boolean(anchorEl);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      event.preventDefault();
      setAnchorEl(event.currentTarget);
      !rest.childrens && navigate(rest.url);
    },
    [navigate, rest.childrens, rest.url],
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

  const isCurrentLocation = useCallback(
    (url: string) => {
      if (url === '/') {
        return rest.currentLocation === '/';
      }
      return rest.currentLocation?.startsWith(url);
    },
    [rest.currentLocation],
  );

  return (
    <Fragment>
      <Button
        variant={isCurrentLocation(rest.url) ? 'outlined' : 'text'}
        className='selected'
        aria-selected={true}
        href={rest.url}
        sx={{ minWidth: '100px' }}
        id='fade-button'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={rest.childrens && <KeyboardArrowDownIcon />}
        color='secondary'>
        {rest.name}
      </Button>
      {rest.childrens && (
        <Menu id='fade-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
          {rest.childrens?.map((child: { title: string; link: string }) => (
            <MenuItem
              component={Link}
              to={child.link}
              key={child.title}
              color='secondary'
              onClick={handleCloseWithUrl(child.link)}
              selected={isCurrentLocation(child.link)}
              sx={{ width: '100px', color: 'secondary.main' }}>
              {child.title}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Fragment>
  );
});

export default MdMenuItem;
