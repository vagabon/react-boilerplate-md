import { Theme } from '@emotion/react';
import { Collapse, CollapseClasses, SxProps } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { memo } from 'react';

export interface IMdCollapseProps {
  children?: React.ReactNode;
  className?: string;
  classes?: Partial<CollapseClasses>;
  collapsedSize?: string | number;
  component?: React.ElementType<TransitionProps>;
  easing?: TransitionProps['easing'];
  in?: boolean;
  orientation?: 'horizontal' | 'vertical';
  timeout?: TransitionProps['timeout'] | 'auto';
  sx?: SxProps<Theme>;
}

const MdCollapse: React.FC<IMdCollapseProps> = memo(
  ({ collapsedSize = '0px', orientation = 'vertical', timeout = 'auto', ...props }) => {
    return <Collapse {...props} collapsedSize={collapsedSize} orientation={orientation} timeout={timeout}></Collapse>;
  },
);

export default MdCollapse;
