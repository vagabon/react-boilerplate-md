import { Link, LinkProps } from '@mui/material';
import { MouseEvent, memo, useCallback } from 'react';
import { useAppRouter } from '../../../router/hook/useAppRouter';
import { useTranslate } from '../../../translate/hook/useTranslate';

export interface IMdLinkProps extends LinkProps {
  href: string;
  label?: string;
  show?: boolean;
  color?: string;
}

export const MdLink: React.FC<IMdLinkProps> = memo(
  ({ href, color = 'primary', label = '', show = true, children, ...rest }) => {
    const { navigate } = useAppRouter();
    const { translate } = useTranslate();

    const onClick = useCallback(
      (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (href.startsWith('http') || href.startsWith('mailto')) {
          window.open(href, '_blank');
        } else {
          navigate?.(href);
        }
      },
      [navigate, href],
    );

    return (
      <>
        {show && (
          <>
            {href ? (
              <Link {...rest} href={href} title={translate(label)} color={color} onClick={onClick}>
                {!label.startsWith('http') ? translate(label) : label}
                {children}
              </Link>
            ) : (
              <>
                {!label.startsWith('http') ? translate(label) : label}
                <>{children}</>
              </>
            )}
          </>
        )}
      </>
    );
  },
);
