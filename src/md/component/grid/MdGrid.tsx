import { Grid, GridProps } from '@mui/material';
import { memo } from 'react';

export interface IMdGridProps extends GridProps {}

export const MdGrid: React.FC<IMdGridProps> = memo(({ ...rest }) => {
  return <Grid {...rest} />;
});
