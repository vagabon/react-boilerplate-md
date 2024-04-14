import { LinearProgress } from '@mui/material';
import { memo } from 'react';

export interface IMdLinearProgressProps {}

const MdLinearProgress: React.FC<IMdLinearProgressProps> = memo(() => {
  return <LinearProgress />;
});

export default MdLinearProgress;
