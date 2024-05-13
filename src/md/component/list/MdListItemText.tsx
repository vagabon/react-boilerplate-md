import { ListItemText } from '@mui/material';
import { memo } from 'react';
import { useAppTranslate } from '../../../translate/hook/useAppTranslate';

export interface IMdListItemTextProps {
  color?: string;
  label: string;
  secondary?: React.JSX.Element;
}

export const MdListItemText: React.FC<IMdListItemTextProps> = memo(({ label, color, secondary }) => {
  const { Trans } = useAppTranslate();

  return <ListItemText className={color} primary={<Trans i18nKey={label} />} secondary={secondary} />;
});
