import { IconButton, IconButtonProps } from '@mui/material';
import { MouseEvent, ReactNode, memo, useCallback } from 'react';
import { ButtonColorType } from '../../md/component/button/MdButton';
import { useIcon } from '../hook/useIcon';

export type IconType = 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

export interface IIconClickableProps extends IconButtonProps {
  icon?: string;
  callback?: () => void;
  children?: ReactNode;
}

export const IconClickable: React.FC<IIconClickableProps> = memo(({ icon, callback, children, ...rest }) => {
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
    <IconButton edge='end' onClick={handleClickIcon}>
      {children ?? <>{getIcon(icon, rest.color as ButtonColorType)}</>}
    </IconButton>
  );
});
