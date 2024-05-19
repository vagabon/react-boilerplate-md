import { CircularProgress, CircularProgressProps } from '@mui/material';
import { memo } from 'react';

export interface IMdCircularProgressProps extends CircularProgressProps {}

export const MdCircularProgress: React.FC<IMdCircularProgressProps> = memo(({ ...rest }) => {
  return <CircularProgress {...rest} />;
});
