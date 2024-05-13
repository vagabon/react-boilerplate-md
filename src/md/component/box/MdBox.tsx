import { Box, SxProps, Theme } from '@mui/material';
import { ReactNode, memo } from 'react';
import { UuidUtils } from '../../../utils/uuid/UuidUtils';

export interface IMdBoxProps {
  id?: string;
  component?: React.ElementType;
  sx?: SxProps<Theme>;
  children: ReactNode;
}

export const MdBox: React.FC<IMdBoxProps> = memo(({ id, component, sx, children }) => {
  return (
    <Box id={id ?? UuidUtils.createUUID()} component={component} sx={sx}>
      {children}
    </Box>
  );
});
