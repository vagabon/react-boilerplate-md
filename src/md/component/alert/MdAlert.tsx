import { Theme } from '@emotion/react';
import { Alert, AlertColor, AlertTitle, SxProps } from '@mui/material';
import { ReactNode } from 'react';
import { Trans } from 'react-i18next';

export interface IMdAlertProps {
  severity: AlertColor;
  color?: AlertColor;
  title?: string;
  label: string;
  icon?: string;
  action?: ReactNode;
  sx?: SxProps<Theme>;
}

const MdAlert: React.FC<IMdAlertProps> = ({ title, label, ...rest }) => {
  return (
    <Alert {...rest}>
      {title && (
        <AlertTitle>
          <Trans i18nKey={title} />
        </AlertTitle>
      )}
      <Trans i18nKey={label} />
    </Alert>
  );
};

export default MdAlert;
