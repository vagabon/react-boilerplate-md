import { Tooltip, TooltipProps } from '@mui/material';
import { memo } from 'react';

export interface IMdTooltipProps extends TooltipProps {}

export const MdTooltip: React.FC<IMdTooltipProps> = memo(({ ...rest }) => {
  return <Tooltip {...rest} />;
});
