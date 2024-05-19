import { Toolbar, ToolbarProps } from '@mui/material';
import { memo } from 'react';

export interface IMdToolbarProps extends ToolbarProps {}

export const MdToolbar: React.FC<IMdToolbarProps> = memo(({ ...rest }) => {
  return <Toolbar {...rest} />;
});
