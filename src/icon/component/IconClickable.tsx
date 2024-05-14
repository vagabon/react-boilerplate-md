import { IconButton } from '@mui/material';
import { MouseEvent, ReactNode, memo, useCallback } from 'react';
import { ButtonColorType } from '../../md/component/button/MdButton';
import { useIcon } from '../hook/useIcon';

export interface IIconClickableProps {
  className?: string;
  icon?: string;
  color?: ButtonColorType;
  disabled?: boolean;
  callback?: () => void;
  children?: ReactNode;
}

export const IconClickable: React.FC<IIconClickableProps> = memo(
  ({ className, icon, color, disabled, callback, children }) => {
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
        {children ?? <>{getIcon(icon, color)}</>}
      </IconButton>
    );
  },
);
