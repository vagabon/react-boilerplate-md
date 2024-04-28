import { LinearProgress } from '@mui/material';
import { memo } from 'react';

export interface IMdLinearProgressProps {
  className?: string;
}

const MdLinearProgress: React.FC<IMdLinearProgressProps> = memo(({ className }) => {
  return <LinearProgress className={className ?? ''} />;
});

export default MdLinearProgress;
