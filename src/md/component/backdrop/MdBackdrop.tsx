import { Theme } from '@emotion/react';
import { Backdrop, CircularProgress, SxProps } from '@mui/material';

export interface IMdBackdropProps {
  open: boolean;
  sx?: SxProps<Theme>;
}

const MdBackdrop: React.FC<IMdBackdropProps> = ({ open }) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

export default MdBackdrop;
