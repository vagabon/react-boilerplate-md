import { Alert, AlertProps, AlertTitle } from '@mui/material';
import { ReactNode, memo } from 'react';
import { Translate } from '../../../translate/component/Translate';

export interface IMdAlertProps extends AlertProps {
  title?: string;
  label: string;
  action?: ReactNode;
  callback?: () => void;
}

export const MdAlert: React.FC<IMdAlertProps> = memo(({ title, label, callback, onClose, ...rest }) => {
  return (
    <Alert {...rest} onClick={callback} onClose={onClose}>
      {title && (
        <AlertTitle>
          <Translate i18nKey={title} />
        </AlertTitle>
      )}
      <Translate i18nKey={label} />
      {rest.children}
    </Alert>
  );
});
