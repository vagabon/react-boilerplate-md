import { Card, CardActions, CardContent, CardHeader, CardMedia, CardProps } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import React, { ReactNode, memo } from 'react';
import { IconClickable } from '../../../icon/component/IconClickable';
import { useIcon } from '../../../icon/hook/useIcon';
import { useAppRouter } from '../../../router/hook/useAppRouter';
import { Translate } from '../../../translate/component/Translate';
import { useTranslate } from '../../../translate/hook/useTranslate';
import { DateUtils } from '../../../utils/date/DateUtils';
import { useId } from '../../hook/useId';
import { MdAvatar } from '../avatar/MdAvatar';
import { ButtonColorType } from '../button/MdButton';
import { MdLink } from '../link/MdLink';
import { MdTypo } from '../typo/MdTypo';

export interface IMdCardProps extends CardProps {
  color?: ButtonColorType;
  icon?: string;
  title?: string;
  titleVariant?: Variant;
  titleCount?: number;
  titleChildren?: ReactNode;
  date?: string;
  url?: string;
  urlUpdate?: string;
  avatar?: string;
  image?: string;
  actions?: ReactNode;
  subactions?: ReactNode;
  buttonchildren?: ReactNode;
  callback?: () => void;
  callbackLeft?: () => void;
}

export const MdCard: React.FC<IMdCardProps> = memo(
  ({
    color = 'inherit',
    icon,
    title,
    titleVariant,
    titleCount,
    titleChildren,
    url,
    urlUpdate,
    avatar,
    image,
    date,
    callbackLeft,
    actions,
    subactions,
    buttonchildren,
    children,
    ...rest
  }) => {
    const { handleNavigate } = useAppRouter();
    const { id } = useId(rest.id as string);
    const { getIcon } = useIcon();
    const { translate } = useTranslate();

    return (
      <Card {...rest} id={id}>
        {image && (
          <CardMedia className={url ? 'pointer' : ''} onClick={url ? handleNavigate(url) : undefined}>
            <img title={'Image : ' + title} alt={'Image : ' + title} src={image} width='100%' />
          </CardMedia>
        )}
        {title && (
          <CardHeader
            avatar={avatar && <MdAvatar name={title} image={avatar} />}
            action={
              <>
                {urlUpdate && <IconClickable color='secondary' icon='settings' callback={handleNavigate(urlUpdate)} />}
                {actions && <>{actions}</>}
              </>
            }
            title={
              titleChildren ? (
                <> {titleChildren}</>
              ) : (
                <div className='flex flex-row align-center'>
                  {callbackLeft && <IconClickable icon='back' color='secondary' callback={callbackLeft} />}
                  {icon && <>{getIcon(icon, color)}&nbsp;</>}
                  <MdLink href={url ?? ''}>
                    <MdTypo className='flex1' variant={titleVariant ?? 'h1'} color={color}>
                      <Translate i18nKey={translate(title)} />
                      {titleCount !== undefined && <> ({titleCount})</>}
                    </MdTypo>
                  </MdLink>
                </div>
              )
            }
            subheader={date ? DateUtils.format(date, 'Le DD MMM YYYY à hhhmm') : ''}
          />
        )}
        {subactions && <div className='card-subactions'>{subactions}</div>}
        {children && <CardContent>{children}</CardContent>}
        {buttonchildren && <CardActions className='justify-end'>{buttonchildren}</CardActions>}
      </Card>
    );
  },
);
