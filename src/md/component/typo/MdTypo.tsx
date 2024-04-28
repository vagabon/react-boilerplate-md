import { SxProps, Theme, Typography, TypographyOwnProps } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ReactNode, memo } from 'react';
import { useAppTranslate } from '../../../translate';

export interface IMdTypoProps {
  className?: string;
  label?: string;
  paragraph?: boolean;
  variant?: Variant | 'inherit';
  color?: TypographyOwnProps['color'];
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  noWrap?: boolean;
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

const MdTypo: React.FC<IMdTypoProps> = memo(
  ({ className, label, paragraph, variant, color, align, noWrap, sx, children }) => {
    const { Trans } = useAppTranslate();

    return (
      <Typography
        className={className ?? ''}
        paragraph={paragraph}
        variant={variant}
        color={color}
        align={align}
        noWrap={noWrap}
        sx={sx}>
        <Trans i18nKey={label} />
        {children}
      </Typography>
    );
  },
);

export default MdTypo;
