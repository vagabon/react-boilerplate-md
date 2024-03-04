import { ListItemText } from '@mui/material';
import { useAppTranslate } from '../../../translate';

export interface IMdListItemTextProps {
  color?: string;
  label: string;
  secondary?: React.JSX.Element;
}
const MdListItemText: React.FC<IMdListItemTextProps> = ({ label, color, secondary }) => {
  const { Trans } = useAppTranslate();

  return <ListItemText className={color} primary={<Trans i18nKey={label} />} secondary={secondary} />;
};

export default MdListItemText;
