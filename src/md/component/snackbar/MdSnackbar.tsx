import { Alert, AlertColor, Slide, SlideProps, Snackbar } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useAppTranslate } from '../../../translate';

type TransitionProps = Omit<SlideProps, 'direction'>;

const TransitionRight = (props: TransitionProps) => {
  return <Slide {...props} direction='left' />;
};

export interface IMdSnackbarProps {
  message: string;
  type: AlertColor;
}

const MdSnackbar: React.FC<IMdSnackbarProps> = ({ message, type }) => {
  const { Trans } = useAppTranslate();
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState<React.ComponentType<TransitionProps> | undefined>(undefined);

  useEffect(() => {
    setTransition(() => TransitionRight);
    setOpen(message !== '');
  }, [message, type]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
      TransitionComponent={transition}
      key={transition ? transition.name : ''}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        <Trans i18nKey={message} />
      </Alert>
    </Snackbar>
  );
};

export default MdSnackbar;
