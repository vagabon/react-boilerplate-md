import { ListItemText, ListItemTextProps } from '@mui/material';
import { memo, useCallback } from 'react';
import { Translate } from '../../../translate/component/Translate';

export interface IMdListItemTextProps extends ListItemTextProps {}

export const MdListItemText: React.FC<IMdListItemTextProps> = memo(({ content = '', primary, ...rest }) => {
  const showPrimary = useCallback(() => {
    return primary ? primary : <Translate i18nKey={content} />;
  }, [primary, content]);

  return <ListItemText {...rest} primary={showPrimary()} />;
});
