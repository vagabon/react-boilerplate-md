import { Link, LinkProps } from '@mui/material';
import { MouseEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppRouter } from '../../../router/hook/useAppRouter';

export interface IMdLinkProps extends LinkProps {
  href: string;
  label?: string;
  show?: boolean;
  color?: string;
}

export const MdLink: React.FC<IMdLinkProps> = memo(
  ({ href, color = 'primary', label = '', show = true, children, ...rest }) => {
    const { navigate } = useAppRouter();
    const { t } = useTranslation();

    const onClick = useCallback(
      (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (href.startsWith('http') || href.startsWith('mailto')) {
          window.open(href, '_blank');
        } else {
          navigate(href);
        }
      },
      [navigate, href],
    );

    return (
      <>
        {show && (
          <>
            {href ? (
              <Link {...rest} href={href} title={t(label)} color={color} onClick={onClick}>
                {t(label)}
                {children}
              </Link>
            ) : (
              <>
                {t(label)}
                <>{children}</>
              </>
            )}
          </>
        )}
      </>
    );
  },
);
