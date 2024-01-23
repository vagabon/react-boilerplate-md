import { Chip } from '@mui/material';
import { ID } from '../../../dto/api/ApiDto';

export interface IMdChipProps {
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  label: string;
  callbackDelete?: (id: ID) => void;
}

const MdChip: React.FC<IMdChipProps> = ({ label, color, callbackDelete }) => {
  return <Chip label={label} color={color} onDelete={callbackDelete} />;
};

export default MdChip;
