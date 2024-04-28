import { Badge, SxProps, Theme } from '@mui/material';
import { ReactNode, memo } from 'react';
import { IconColorType, useIcon } from '../../../icon';
import { useAppTranslate } from '../../../translate';
import { I18nUtils } from '../../../utils';

export type BadgeColorType = 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning';

export interface IMdBadgeProps {
  className?: string;
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

const MdBadge: React.FC<IMdBadgeProps> = memo(
  ({ className, content, color, title, max, showZero, icon, iconColor, sx, children }) => {
    const { t } = useAppTranslate();
    const { getIcon } = useIcon();

    return (
      <Badge
        className={className ?? ''}
        badgeContent={content ?? 0}
        color={color ?? 'error'}
        sx={sx}
        showZero={showZero ?? false}
        max={max}
        title={title && I18nUtils.translate(t, title)}>
        {icon && getIcon(icon, iconColor ?? 'primary')}
        {children}
      </Badge>
    );
  },
);

export default MdBadge;
