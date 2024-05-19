import { Backdrop, BackdropProps, CircularProgress } from '@mui/material';
import { memo } from 'react';

export interface IMdBackdropProps extends BackdropProps {}

export const MdBackdrop: React.FC<IMdBackdropProps> = memo(({ ...rest }) => {
  return (
    <Backdrop {...rest} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
});
