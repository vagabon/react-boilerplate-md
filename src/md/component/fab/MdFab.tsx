import { Fab, FabProps } from '@mui/material';
import { SyntheticEvent, memo, useCallback } from 'react';
import { useIcon } from '../../../icon/hook/useIcon';

export interface IMdFabProps extends FabProps {
  label?: string;
  icon?: string;
  callback?: () => void;
}

export const MdFab: React.FC<IMdFabProps> = memo(({ icon = 'add', callback, ...rest }) => {
  const { getIcon } = useIcon();

  const handleClick = useCallback(
    (event: SyntheticEvent<Element, Event>) => {
      event.stopPropagation();
      callback?.();
    },
    [callback],
  );

  return (
    <Fab {...rest} aria-label={rest.label} onClick={handleClick}>
      {getIcon(icon)}
    </Fab>
  );
});
