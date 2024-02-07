import { Box, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
import { UuidUtils } from '../../../utils';

export interface IMdBoxProps {
  id?: string;
  component?: React.ElementType;
  sx?: SxProps<Theme>;
  children: ReactNode;
}

const MdBox: React.FC<IMdBoxProps> = ({ id, component, sx, children }) => {
  return (
    <Box id={id ?? UuidUtils.createUUID()} component={component} sx={sx}>
      {children}
    </Box>
  );
};

export default MdBox;
