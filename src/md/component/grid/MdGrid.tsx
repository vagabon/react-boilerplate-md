import { Grid } from '@mui/material';
import { CSSProperties, ReactNode, memo } from 'react';

export interface IMdGridProps {
  className?: string;
  children: ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: boolean;
  style?: CSSProperties;
}

export const MdGrid: React.FC<IMdGridProps> = memo(({ children, ...rest }) => {
  return <Grid {...rest}>{children}</Grid>;
});
