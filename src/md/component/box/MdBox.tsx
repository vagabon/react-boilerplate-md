import { Box, BoxProps } from '@mui/material';
import { ReactNode, memo, useMemo } from 'react';
import { UuidUtils } from '../../../utils/uuid/UuidUtils';

export interface IMdBoxProps extends BoxProps {
  children: ReactNode;
}

export const MdBox: React.FC<IMdBoxProps> = memo(({ id, children, ...rest }) => {
  const newId = useMemo(() => id ?? UuidUtils.createUUID(), [id]);

  return (
    <Box {...rest} id={newId}>
      {children}
    </Box>
  );
});
