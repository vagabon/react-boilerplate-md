import { LinearProgress, LinearProgressProps } from '@mui/material';
import { memo } from 'react';

export interface IMdLinearProgressProps extends LinearProgressProps {}

export const MdLinearProgress: React.FC<IMdLinearProgressProps> = memo(({ ...rest }) => {
  return <LinearProgress {...rest} />;
});
