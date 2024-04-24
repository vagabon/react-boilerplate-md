import { Avatar, SxProps, Theme } from '@mui/material';
import { memo } from 'react';
import { ObjectUtils } from '../../../utils/object/ObjectUtils';

export interface IMdAvatarProps {
  name: string;
  image?: string;
  sx?: SxProps<Theme>;
}

const MdAvatar: React.FC<IMdAvatarProps> = memo(({ name, image, sx }) => {
  return (
    <>
      {image && image !== null && image !== '' && image.includes('/') ? (
        <Avatar alt={name} src={image} sx={sx} />
      ) : (
        <Avatar sx={sx}>{ObjectUtils.capitalize(name)[0]}</Avatar>
      )}
    </>
  );
});

export default MdAvatar;
