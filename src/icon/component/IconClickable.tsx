import { IconButton } from '@mui/material';
import { MouseEvent, useCallback } from 'react';
import { IconColorType, useIcon } from '../hook/useIcon';

export interface IIconClickableProps {
  icon: string;
  color?: IconColorType;
  disabled?: boolean;
  callback?: () => void;
}

const IconClickable: React.FC<IIconClickableProps> = ({ icon, color, disabled, callback }) => {
  const { getIcon } = useIcon();

  const handleClickIcon = useCallback(
    (event: MouseEvent | MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation();
      event.preventDefault();
      callback?.();
    },
    [callback],
  );

  return (
    <IconButton edge='end' aria-label='delete' onClick={handleClickIcon} disabled={disabled}>
      {getIcon(icon, color)}
    </IconButton>
  );
};

export default IconClickable;
