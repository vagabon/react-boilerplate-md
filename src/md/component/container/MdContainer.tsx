import { Breakpoint, Container } from '@mui/material';
import { ReactNode, memo } from 'react';

export interface IMdContainerProps {
  className?: string;
  maxWidth?: Breakpoint | false;
  children?: ReactNode;
}

export const MdContainer: React.FC<IMdContainerProps> = memo(({ className = '', maxWidth, children }) => {
  return (
    <Container className={className} maxWidth={maxWidth ?? 'lg'}>
      {children}
    </Container>
  );
});
