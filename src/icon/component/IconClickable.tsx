import { IconButton } from '@mui/material';
import { MouseEvent, useCallback } from 'react';
import { IconColorType, useIcon } from '../hook/useIcon';

export interface IIconClickableProps {
  className?: string;
  icon: string;
  color?: IconColorType;
  disabled?: boolean;
  callback?: () => void;
}

const IconClickable: React.FC<IIconClickableProps> = ({ className, icon, color, disabled, callback }) => {
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
    <IconButton className={className} edge='end' aria-label='delete' onClick={handleClickIcon} disabled={disabled}>
      {getIcon(icon, color, disabled)}
    </IconButton>
  );
};

export default IconClickable;
