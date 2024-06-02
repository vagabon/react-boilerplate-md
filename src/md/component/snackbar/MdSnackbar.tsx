import { Alert, AlertColor, Slide, SlideProps, Snackbar } from '@mui/material';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { MdTypo } from '../typo/MdTypo';

type TransitionProps = Omit<SlideProps, 'direction'>;

const TransitionRight = (transitionProps: TransitionProps) => {
  return <Slide {...transitionProps} direction='left' />;
};

export interface IMdSnackbarProps {
  className?: string;
  message: string;
  type: AlertColor;
}

export const MdSnackbar: React.FC<IMdSnackbarProps> = memo(({ className = '', message, type }) => {
  const [open, setOpen] = useState(false);
  const transition = useMemo(() => TransitionRight, []);

  useEffect(() => {
    setOpen(message !== '');
  }, [message]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Snackbar
      className={className}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
      TransitionComponent={transition}
      key={transition ? transition.name : ''}>
      <Alert className='width100' onClose={handleClose} severity={type}>
        <MdTypo content={message} />
      </Alert>
    </Snackbar>
  );
});
