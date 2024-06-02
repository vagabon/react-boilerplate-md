import { Modal, ModalProps } from '@mui/material';
import { MouseEvent, memo, useCallback } from 'react';
import { IconClickable } from '../../../icon/component/IconClickable';
import { MdBox } from '../box/MdBox';

// TODO: add storybook https://mui.com/material-ui/react-modal/

export interface IModalProps extends ModalProps {
  callbackClose: () => void;
}

export const MdModal: React.FC<IModalProps> = memo(({ className = '', callbackClose, ...rest }) => {
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
    <Modal {...rest} className={className + ' modal'} onClick={handleClick} onClose={handleClose(callbackClose)}>
      <MdBox className='relative'>
        <div className='icon-close'>
          <IconClickable icon='close' callback={callbackClose} />
        </div>
        {rest.children}
      </MdBox>
    </Modal>
  );
});
