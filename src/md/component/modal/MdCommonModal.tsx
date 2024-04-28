import { Box, Modal } from '@mui/material';
import { MouseEvent, ReactNode, memo, useCallback } from 'react';
import IconClickable from '../../../icon/component/IconClickable';

export interface ICommonModalProps {
  className?: string;
  open?: boolean;
  children?: ReactNode;
  handleClose: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const MdCommonModal: React.FC<ICommonModalProps> = memo(({ className = '', open = false, ...rest }) => {
  const handleClick = useCallback((event: MouseEvent) => {
    event.stopPropagation();
  }, []);

  const handleClose = useCallback(
    (callback: () => void) => (event: MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();
      callback();
    },
    [],
  );

  return (
    <Modal className={className + ' modal'} open={open} onClick={handleClick} onClose={handleClose(rest.handleClose)}>
      <Box sx={{ ...style, position: 'relative' }}>
        <div style={{ position: 'absolute', top: '11px', right: '11px' }}>
          <IconClickable icon='close' callback={rest.handleClose} />
        </div>
        {rest.children}
      </Box>
    </Modal>
  );
});

export default MdCommonModal;
