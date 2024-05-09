import { Link } from '@mui/material';
import { CSSProperties, MouseEvent, memo, useCallback } from 'react';
import { useAppRouter } from '../../../router';
import { useAppTranslate } from '../../../translate';

export interface IMdLinkProps {
  href: string;
  className?: string;
  label?: string;
  target?: string;
  show?: boolean;
  color?: string;
  sx?: CSSProperties;
}

const MdLink: React.FC<IMdLinkProps> = memo(
  ({ href, className = '', color = 'primary', label, target, show = true, ...rest }) => {
    const { t, Trans } = useAppTranslate();
    const { navigate } = useAppRouter();

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
          <Link
            href={href}
            target={target}
            title={t(label ?? '')}
            className={className}
            color={color}
            onClick={onClick}
            style={rest.sx}>
            <Trans i18nKey={label} />
          </Link>
        )}
      </>
    );
  },
);

export default MdLink;
