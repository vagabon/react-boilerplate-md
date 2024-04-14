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
  | 'facebook';

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
  type?: 'submit';
  disabled?: boolean;
  sx?: SxProps<Theme>;
  callback?: () => void;
}

const MdButton: React.FC<IMdButtonProps> = memo((props) => {
  const { navigate } = useAppRouter();
  const { Trans } = useAppTranslate();
  const { getIcon } = useIcon();
  const [icon, setIcon] = useState<ReactNode | undefined>(getIcon(props.icon, props.iconColor, props.disabled));

  useEffect(() => {
    setIcon(getIcon(props.icon, props.iconColor, props.disabled));
  }, [props.icon, props.iconColor, props.disabled, getIcon]);

  const onClick = useCallback(
    (callback?: () => void) => (event: MouseEvent) => {
      if (props.type !== 'submit') {
        event.stopPropagation();
        event.preventDefault();
        if (callback) {
          callback();
        } else if (props.url) {
          navigate(props.url);
        }
      }
    },
    [props.url, props.type, navigate],
  );

  const showContent = useCallback(() => {
    return <>{icon ? <>{icon}</> : <Trans i18nKey={props.label}></Trans>}</>;
  }, [icon, props.label, Trans]);

  return (
    <>
      {props.show && (
        <Button
          className={props.className ?? ''}
          size={props.size ?? 'small'}
          variant={props.variant}
          type={props.type ?? 'button'}
          fullWidth={props.fullWidth}
          onClick={onClick(props.callback)}
          startIcon={getIcon(props.startIcon)}
          color={props.color ?? 'primary'}
          disabled={props.disabled}
          sx={props.sx}>
          {showContent()}
        </Button>
      )}
    </>
  );
});

MdButton.defaultProps = {
  show: true,
  url: '#',
  size: 'small',
  label: '',
  variant: 'contained',
};

export default MdButton;
