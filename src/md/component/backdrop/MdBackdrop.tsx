import { Backdrop, CircularProgress } from '@mui/material';
import { memo } from 'react';

export interface IMdBackdropProps {
  className?: string;
  open: boolean;
}

const MdBackdrop: React.FC<IMdBackdropProps> = memo(({ className = '', open }) => {
  return (
    <Backdrop className={className} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
});

export default MdBackdrop;
