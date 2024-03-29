import { Avatar, IconButton, SxProps, Theme } from '@mui/material';
import { MouseEvent, useCallback } from 'react';
import { useAppRouter } from '../../../router';
import { ObjectUtils } from '../../../utils/object/ObjectUtils';

export interface IMdAvatarProps {
  name: string;
  image?: string;
  disabled?: boolean;
  url?: string;
  sx?: SxProps<Theme>;
  callback?: () => void;
}

const MdAvatar: React.FC<IMdAvatarProps> = ({ name, image, disabled, url, sx, callback }) => {
  const { navigate } = useAppRouter();

  const handleClick = useCallback(
    (event: MouseEvent | MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation();
      event.preventDefault();
      url && navigate(url);
      callback?.();
    },
    [url, navigate, callback],
  );

  return (
    <IconButton edge='end' aria-label='delete' onClick={handleClick} disabled={disabled}>
      {image && image !== null && image !== '' && image.includes('/') ? (
        <Avatar alt={name} src={image} sx={sx} />
      ) : (
        <Avatar color='secondary' sx={sx}>
          {ObjectUtils.capitalize(name)[0]}
        </Avatar>
      )}
    </IconButton>
  );
};

export default MdAvatar;
