import { Theme } from '@emotion/react';
import { Alert, AlertColor, AlertTitle, SxProps } from '@mui/material';
import { ReactNode, memo } from 'react';
import { Trans } from 'react-i18next';

export interface IMdAlertProps {
  className?: string;
  severity: AlertColor;
  color?: AlertColor;
  title?: string;
  label: string;
  icon?: string;
  action?: ReactNode;
  sx?: SxProps<Theme>;
  callback?: () => void;
}

const MdAlert: React.FC<IMdAlertProps> = memo(({ title, label, callback, ...rest }) => {
  return (
    <Alert {...rest} onClick={callback}>
      {title && (
        <AlertTitle>
          <Trans i18nKey={title} />
        </AlertTitle>
      )}
      <Trans i18nKey={label} />
    </Alert>
  );
});

export default MdAlert;
