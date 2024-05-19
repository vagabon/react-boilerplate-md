import { Container, ContainerProps } from '@mui/material';
import { memo } from 'react';

export interface IMdContainerProps extends ContainerProps {}

export const MdContainer: React.FC<IMdContainerProps> = memo(({ maxWidth = 'lg', ...rest }) => {
  return <Container {...rest} maxWidth={maxWidth} />;
});
