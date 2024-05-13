import { Avatar, SxProps, Theme } from '@mui/material';
import { memo } from 'react';
import { ObjectUtils } from '../../../utils/object/ObjectUtils';

export interface IMdAvatarProps {
  className?: string;
  name: string;
  image?: string;
  sx?: SxProps<Theme>;
}

export const MdAvatar: React.FC<IMdAvatarProps> = memo(({ className = '', name, image, sx }) => {
  return (
    <>
      {image && image !== null && image !== '' && image.includes('/') ? (
        <Avatar className={className} alt={name} src={image} sx={sx} />
      ) : (
        <Avatar className={className} sx={sx}>
          {ObjectUtils.capitalize(name)[0]}
        </Avatar>
      )}
    </>
  );
});
