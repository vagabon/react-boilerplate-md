import { Modal, ModalProps } from '@mui/material';
import { MouseEvent, memo, useCallback } from 'react';
import { IconClickable } from '../../../icon/component/IconClickable';
import { MdBox } from '../box/MdBox';

// TODO: add storybook https://mui.com/material-ui/react-modal/

export interface IModalProps extends ModalProps {
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

export const MdModal: React.FC<IModalProps> = memo(({ className = '', ...rest }) => {
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
    <Modal {...rest} className={className + ' modal'} onClick={handleClick} onClose={handleClose(rest.handleClose)}>
      <MdBox sx={{ ...style, position: 'relative' }}>
        <div style={{ position: 'absolute', top: '11px', right: '11px', zIndex: 3000 }}>
          <IconClickable icon='close' callback={rest.handleClose} />
        </div>
        {rest.children}
      </MdBox>
    </Modal>
  );
});