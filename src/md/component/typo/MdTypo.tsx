import { Typography, TypographyProps } from '@mui/material';
import { memo } from 'react';
import { Translate } from '../../../translate/component/Translate';

export interface IMdTypoProps extends TypographyProps {
  content?: string;
  after?: string;
}

export const MdTypo: React.FC<IMdTypoProps> = memo(({ content = '', after, children, ...rest }) => {
  return (
    <Typography {...rest}>
      <Translate i18nKey={content} />
      {after && (
        <span>
          <Translate i18nKey={after} />
        </span>
      )}
      {children}
    </Typography>
  );
});
