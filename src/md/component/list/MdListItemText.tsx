import { ListItemText, ListItemTextProps } from '@mui/material';
import { memo } from 'react';

export interface IMdListItemTextProps extends ListItemTextProps {}

export const MdListItemText: React.FC<IMdListItemTextProps> = memo(({ ...rest }) => {
  return <ListItemText {...rest} />;
});
