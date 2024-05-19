import { Avatar, AvatarProps } from '@mui/material';
import { memo } from 'react';
import { ObjectUtils } from '../../../utils/object/ObjectUtils';

export interface IMdAvatarProps extends AvatarProps {
  name: string;
  image?: string;
}

export const MdAvatar: React.FC<IMdAvatarProps> = memo(({ name, image, ...rest }) => {
  return (
    <>
      {image && image !== null && image !== '' && image.includes('/') ? (
        <Avatar {...rest} alt={name} src={image} />
      ) : (
        <Avatar {...rest}>{ObjectUtils.capitalize(name)[0]}</Avatar>
      )}
    </>
  );
});
