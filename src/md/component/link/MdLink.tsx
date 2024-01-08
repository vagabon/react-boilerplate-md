import { TypographyOwnProps } from '@mui/material';
import Link from '@mui/material/Link';
import { useAppTranslate } from '../../../translate';

export interface IMdLinkProps {
  href: string;
  variant?: TypographyOwnProps['variant'];
  label?: string;
  color?: string;
  target?: string;
  show?: boolean;
}

const MdLink: React.FC<IMdLinkProps> = ({ href, variant, label, color, target, ...rest }) => {
  const { Trans } = useAppTranslate();

  return (
    <>
      {rest.show && (
        <Link href={href} variant={variant ?? 'body2'} color={color} target={target}>
          <Trans i18nKey={label} />
        </Link>
      )}
    </>
  );
};

MdLink.defaultProps = {
  show: true,
};

export default MdLink;
