import { Theme } from '@emotion/react';
import { Collapse, CollapseClasses, SxProps } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { memo } from 'react';

export interface IMdCollapseProps {
  className?: string;
  classes?: Partial<CollapseClasses>;
  collapsedSize?: string | number;
  component?: React.ElementType<TransitionProps>;
  easing?: TransitionProps['easing'];
  in?: boolean;
  orientation?: 'horizontal' | 'vertical';
  timeout?: TransitionProps['timeout'] | 'auto';
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}

export const MdCollapse: React.FC<IMdCollapseProps> = memo(({ collapsedSize, orientation, timeout, ...rest }) => {
  return (
    <Collapse
      {...rest}
      collapsedSize={collapsedSize ?? '0px'}
      orientation={orientation ?? 'vertical'}
      timeout={timeout ?? 'auto'}></Collapse>
  );
});
