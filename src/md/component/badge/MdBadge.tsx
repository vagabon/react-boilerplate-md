import { Badge, BadgeProps } from '@mui/material';
import { PropsWithChildren, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useIcon } from '../../../icon/hook/useIcon';
import { ButtonColorType } from '../button/MdButton';

export interface IMdBadgeProps extends BadgeProps, PropsWithChildren {
  title?: string;
  icon?: string;
  iconColor?: ButtonColorType;
}

export const MdBadge: React.FC<IMdBadgeProps> = memo(
  ({ badgeContent = 0, title, icon, color = 'error', iconColor = 'primary', children, ...rest }) => {
    const { t } = useTranslation();
    const { getIcon } = useIcon();

    return (
      <Badge {...rest} color={color ?? 'error'} badgeContent={badgeContent} title={title && t(title)}>
        {icon && getIcon(icon, iconColor)}
        {children}
      </Badge>
    );
  },
);
