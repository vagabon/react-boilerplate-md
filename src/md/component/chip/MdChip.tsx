import { Chip, ChipProps } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ID } from '../../../dto/api/ApiDto';
import { useIcon } from '../../../icon/hook/useIcon';
import { MdAvatar } from '../avatar/MdAvatar';
import { ButtonColorType } from '../button/MdButton';

export interface IMdChipProps extends Omit<ChipProps, 'icon' | 'avatar'> {
  avatar?: string;
  label: string;
  icon?: string;
  iconColor?: ButtonColorType;
  title?: string;
  callbackDelete?: (id: ID) => void;
}

export const MdChip: React.FC<IMdChipProps> = memo(
  ({ label, avatar, icon, iconColor = 'inherit', title, callbackDelete, ...rest }) => {
    const { t } = useTranslation();
    const { getIcon } = useIcon();

    return (
      <Chip
        {...rest}
        className={rest.className + (callbackDelete ? ' ' : ' reverse')}
        avatar={avatar ? <MdAvatar name={avatar} image={avatar} /> : undefined}
        label={t(label)}
        title={title && t(title)}
        icon={callbackDelete || icon ? getIcon(icon, iconColor) : undefined}
        onDelete={callbackDelete ?? undefined}
        deleteIcon={callbackDelete ? getIcon(icon) : undefined}
      />
    );
  },
);
