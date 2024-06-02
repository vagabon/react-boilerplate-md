import { ClickAwayListener, Drawer, DrawerProps } from '@mui/material';
import { PropsWithChildren, memo, useCallback } from 'react';

export interface IMdDrawerProps extends DrawerProps, PropsWithChildren {
  callbackClose?: () => void;
}

export const MdDrawer: React.FC<IMdDrawerProps> = memo(({ callbackClose, children, ...rest }) => {
  const handleClickAway = useCallback(
    (callbackClose?: () => void) => () => {
      callbackClose?.();
    },
    [],
  );

  return (
    <ClickAwayListener onClickAway={handleClickAway(callbackClose)}>
      <Drawer {...rest} onClose={handleClickAway(callbackClose)}>
        {children}
      </Drawer>
    </ClickAwayListener>
  );
});
