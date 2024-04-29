import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import Button from '@mui/material/Button';
import { MouseEvent, ReactNode, memo, useCallback, useEffect, useState } from 'react';
import { IconColorType, useIcon } from '../../../icon/hook/useIcon';
import { useAppRouter } from '../../../router';
import { useAppTranslate } from '../../../translate';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    google: true;
    facebook: true;
    gold: true;
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
  | 'gold';

export interface IMdButtonProps {
  className?: string;
  show?: boolean;
  label?: string;
  url?: string;
  startIcon?: string;
  fullWidth?: boolean;
  icon?: string;
  iconColor?: IconColorType;
  color?: ButtonColorType;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  sx?: SxProps<Theme>;
  callback?: () => void;
}

const MdButton: React.FC<IMdButtonProps> = memo(
  ({
    className = '',
    show = true,
    url = '#',
    size = 'small',
    label = '',
    variant = 'contained',
    type = 'button',
    ...rest
  }) => {
    const { navigate } = useAppRouter();
    const { Trans } = useAppTranslate();
    const { getIcon } = useIcon();
    const [icon, setIcon] = useState<ReactNode | undefined>(getIcon(rest.icon, rest.iconColor, rest.disabled));

    useEffect(() => {
      setIcon(getIcon(rest.icon, rest.iconColor, rest.disabled));
    }, [rest.icon, rest.iconColor, rest.disabled, getIcon]);

    const onClick = useCallback(
      (callback?: () => void) => (event: MouseEvent) => {
        if (type !== 'submit') {
          event.stopPropagation();
          event.preventDefault();
          if (callback) {
            callback();
          } else if (url) {
            navigate(url);
          }
        }
      },
      [url, type, navigate],
    );

    const showContent = useCallback(() => {
      return <>{icon ? <>{icon}</> : <Trans i18nKey={label}></Trans>}</>;
    }, [icon, label, Trans]);

    return (
      <>
        {show && (
          <Button
            className={className}
            size={size}
            variant={variant}
            type={type}
            fullWidth={rest.fullWidth}
            onClick={onClick(rest.callback)}
            startIcon={getIcon(rest.startIcon)}
            color={rest.color ?? 'primary'}
            disabled={rest.disabled}
            sx={rest.sx}>
            {showContent()}
          </Button>
        )}
      </>
    );
  },
);

export default MdButton;
