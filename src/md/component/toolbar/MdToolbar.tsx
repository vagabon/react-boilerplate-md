import { SxProps, Theme, Toolbar } from '@mui/material';
import { ReactNode, memo } from 'react';
import { useId } from '../../hook/useId';

export interface IMdToolbarProps {
  id?: string;
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

const MdToolbar: React.FC<IMdToolbarProps> = memo(({ className = '', sx, children, ...rest }) => {
  const { id } = useId(rest.id);

  return (
    <Toolbar id={id} className={className} sx={sx}>
      {children}
    </Toolbar>
  );
});

export default MdToolbar;
