import { Badge, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
import { IconColorType, useIcon } from '../../../icon';
import { useAppTranslate } from '../../../translate';
import { I18nUtils } from '../../../utils';

export type BadgeColorType = 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning';

export interface IMdBadgeProps {
  content?: number;
  max?: number;
  title?: string;
  color?: BadgeColorType;
  showZero?: boolean;
  icon?: string;
  iconColor?: IconColorType;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

const MdBadge: React.FC<IMdBadgeProps> = ({
  content = 0,
  color = 'error',
  title,
  max,
  showZero = false,
  icon,
  iconColor = 'primary',
  sx,
  children,
}) => {
  const { t } = useAppTranslate();
  const { getIcon } = useIcon();

  return (
    <Badge
      badgeContent={content}
      color={color}
      sx={sx}
      showZero={showZero}
      max={max}
      title={title && I18nUtils.translate(t, title)}>
      {icon && getIcon(icon, iconColor)}
      {children}
    </Badge>
  );
};

export default MdBadge;
