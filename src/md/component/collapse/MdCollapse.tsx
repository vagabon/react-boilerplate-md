import { Collapse, CollapseProps } from '@mui/material';
import { memo } from 'react';

export interface IMdCollapseProps extends CollapseProps {}

export const MdCollapse: React.FC<IMdCollapseProps> = memo(
  ({ collapsedSize = '0px', orientation = 'vertical', timeout = 'auto', ...rest }) => {
    return <Collapse {...rest} collapsedSize={collapsedSize} orientation={orientation} timeout={timeout}></Collapse>;
  },
);
