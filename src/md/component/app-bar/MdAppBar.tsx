import { AppBar, AppBarProps } from '@mui/material';
import { memo } from 'react';

export interface IMdAppBarProps extends AppBarProps {}

export const MdAppBar: React.FC<IMdAppBarProps> = memo(({ ...rest }) => {
  return <AppBar {...rest} />;
});
