import { Chip } from '@mui/material';
import { ID } from '../../../dto/api/ApiDto';
import { useIcon } from '../../../icon';

export interface IMdChipProps {
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  label: string;
  icon?: string;
  callbackDelete?: (id: ID) => void;
}

const MdChip: React.FC<IMdChipProps> = ({ label, icon, color, callbackDelete = () => {} }) => {
  const { getIcon } = useIcon();
  return (
    <Chip
      label={label}
      color={color}
      onDelete={icon ? callbackDelete : undefined}
      deleteIcon={icon ? getIcon(icon) : undefined}
    />
  );
};

export default MdChip;
