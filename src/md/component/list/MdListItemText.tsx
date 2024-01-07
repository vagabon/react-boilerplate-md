import { ListItemText } from '@mui/material';
import { useAppTranslate } from '../../../translate';

export interface IMdListItemTextProps {
  color?: string;
  label: string;
  secondary?: React.JSX.Element;
}
const MdListItemText: React.FC<IMdListItemTextProps> = ({ label, color, secondary }) => {
  const { t } = useAppTranslate();

  return <ListItemText className={color} primary={t(label)} secondary={secondary} />;
};

export default MdListItemText;
