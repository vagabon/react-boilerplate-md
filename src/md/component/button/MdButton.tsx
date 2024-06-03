import { Button, ButtonProps } from '@mui/material';
import { memo, useMemo } from 'react';
import { useIcon } from '../../../icon/hook/useIcon';
import { Translate } from '../../../translate/component/Translate';
import { useButtonCallback } from './hook/useButtonCallback';

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
  labelClassName?: string;
  url?: string;
  startIcon?: string | React.JSX.Element;
  icon?: string;
  iconColor?: ButtonColorType;
  color?: ButtonColorType;
  callback?: () => void;
}

export const MdButton: React.FC<IMdButtonProps> = memo(
  ({
    show = true,
    url,
    label = '',
    labelClassName = '',
    size = 'small',
    variant = 'contained',
    type = 'button',
    callback,
    ...rest
  }) => {
    const { getIcon } = useIcon();
    const { handleClick, addHref } = useButtonCallback(type, url);

    const icon = useMemo(() => getIcon(rest.icon, rest.iconColor), [rest.icon, rest.iconColor, getIcon]);

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
            onClick={handleClick(callback)}>
            {icon ? (
              <>{icon}</>
            ) : (
              <div className={labelClassName} key={localStorage.getItem('i18nextLng')}>
                <Translate i18nKey={label} />
              </div>
            )}
          </Button>
        )}
      </>
    );
  },
);
