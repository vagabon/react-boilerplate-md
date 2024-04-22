import { Fab, PropTypes } from '@mui/material';
import { SyntheticEvent, memo, useCallback } from 'react';
import { useIcon } from '../../../icon';

export interface IMdFabProps {
  className?: string;
  size: 'medium' | 'small';
  color: PropTypes.Color | 'success' | 'error' | 'info' | 'warning';
  label?: string;
  icon?: string;
  callback?: () => void;
}

const MdFab: React.FC<IMdFabProps> = memo(({ className, size, color, label, icon = 'add', callback }) => {
  const { getIcon } = useIcon();

  const handleClick = useCallback(
    (event: SyntheticEvent<Element, Event>) => {
      event.stopPropagation();
      callback?.();
    },
    [callback],
  );

  return (
    <Fab className={className} size={size} color={color} aria-label={label} onClick={handleClick}>
      {getIcon(icon)}
    </Fab>
  );
});

export default MdFab;
