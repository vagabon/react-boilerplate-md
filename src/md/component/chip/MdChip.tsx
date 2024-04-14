import { Chip } from '@mui/material';
import { memo } from 'react';
import { ID } from '../../../dto/api/ApiDto';
import { useIcon } from '../../../icon';
import { useAppTranslate } from '../../../translate';
import { I18nUtils } from '../../../utils/i18n/I18nUtils';

export interface IMdChipProps {
  className?: string;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  label: string;
  icon?: string;
  size?: 'small' | 'medium';
  title?: string;
  variant?: 'filled' | 'outlined';
  callbackDelete?: (id: ID) => void;
}

const MdChip: React.FC<IMdChipProps> = memo(
  ({ className, label, icon, size, title, color, variant, callbackDelete = () => {} }) => {
    const { t } = useAppTranslate();
    const { getIcon } = useIcon();

    return (
      <Chip
        className={className}
        label={I18nUtils.translate(t, label)}
        color={color}
        size={size}
        variant={variant}
        onDelete={icon ? callbackDelete : undefined}
        deleteIcon={icon ? getIcon(icon) : undefined}
        title={title && I18nUtils.translate(t, title)}
      />
    );
  },
);

export default MdChip;
