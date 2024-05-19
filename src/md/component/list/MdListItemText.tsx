import { ListItemText } from '@mui/material';
import { memo } from 'react';
import { Translate } from '../../../translate/component/Translate';

export interface IMdListItemTextProps {
  color?: string;
  label: string;
  secondary?: React.JSX.Element;
}

export const MdListItemText: React.FC<IMdListItemTextProps> = memo(({ label, color, secondary }) => {
  return <ListItemText className={color} primary={<Translate i18nKey={label} />} secondary={secondary} />;
});
