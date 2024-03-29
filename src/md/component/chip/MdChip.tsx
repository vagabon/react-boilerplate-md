import { Chip } from '@mui/material';
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
  variant?: 'filled' | 'outlined';
  callbackDelete?: (id: ID) => void;
}

const MdChip: React.FC<IMdChipProps> = ({
  className,
  label,
  icon,
  size,
  color,
  variant,
  callbackDelete = () => {},
}) => {
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
    />
  );
};

export default MdChip;
