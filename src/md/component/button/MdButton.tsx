import { Button, ButtonProps } from '@mui/material';
import { MouseEvent, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useIcon } from '../../../icon/hook/useIcon';
import { useAppRouter } from '../../../router/hook/useAppRouter';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    google: true;
    facebook: true;
    premium: true;
  }
}

export type ButtonColorType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'google'
  | 'facebook'
  | 'premium';

export interface IMdButtonProps extends ButtonProps {
  show?: boolean;
  label?: string;
  url?: string;
  startIcon?: string | React.JSX.Element;
  icon?: string;
  iconColor?: ButtonColorType;
  color?: ButtonColorType;
  callback?: () => void;
}

export const MdButton: React.FC<IMdButtonProps> = memo(
  ({ show = true, url, label = '', size = 'small', variant = 'contained', type = 'button', callback, ...rest }) => {
    const { navigate } = useAppRouter();
    const { getIcon } = useIcon();
    const { t } = useTranslation();

    const icon = useMemo(() => getIcon(rest.icon, rest.iconColor), [rest.icon, rest.iconColor, getIcon]);

    const onClick = useCallback(
      (callback?: () => void) => (event: MouseEvent) => {
        if (type !== 'submit') {
          event.stopPropagation();
          event.preventDefault();
          if (callback) {
            callback();
          } else if (url) {
            url.startsWith('http') ? window.open(url) : navigate(url);
          }
        }
      },
      [url, type, navigate],
    );

    const addHref = useCallback((url?: string) => {
      let data = {};
      url && (data = { href: url });
      return data;
    }, []);

    return (
      <>
        {show && (
          <Button
            {...rest}
            {...addHref(url)}
            size={size}
            variant={variant}
            type={type}
            startIcon={typeof rest.startIcon === 'string' ? getIcon(rest.startIcon, 'inherit') : rest.startIcon}
            endIcon={typeof rest.endIcon === 'string' ? getIcon(rest.endIcon) : rest.endIcon}
            color={rest.color ?? 'primary'}
            onClick={onClick(callback)}>
            {icon ? <>{icon}</> : <div key={localStorage.getItem('i18nextLng')}>{t(label)}</div>}
          </Button>
        )}
      </>
    );
  },
);
