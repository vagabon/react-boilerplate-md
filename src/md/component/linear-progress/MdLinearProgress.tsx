import { LinearProgress } from '@mui/material';
import { memo } from 'react';

export interface IMdLinearProgressProps {
  className?: string;
}

export const MdLinearProgress: React.FC<IMdLinearProgressProps> = memo(({ className = '' }) => {
  return <LinearProgress className={className} />;
});
