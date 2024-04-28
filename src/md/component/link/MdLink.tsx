import { CSSProperties, memo } from 'react';
import { useAppRouter } from '../../../router';
import { useAppTranslate } from '../../../translate';

export interface IMdLinkProps {
  href: string;
  className?: string;
  label?: string;
  target?: string;
  show?: boolean;
  sx?: CSSProperties;
}

const MdLink: React.FC<IMdLinkProps> = memo(({ href, className = '', label, target, show = true, ...rest }) => {
  const { Trans } = useAppTranslate();
  const { Link } = useAppRouter();

  return (
    <>
      {show && (
        <Link to={href} target={target} className={className} style={rest.sx}>
          <Trans i18nKey={label} />
        </Link>
      )}
    </>
  );
});

export default MdLink;
