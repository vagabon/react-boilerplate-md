import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React, { CSSProperties, ReactNode, useCallback } from 'react';
import { ID } from '../../../dto/api/ApiDto';
import { IconColorType, useIcon } from '../../../icon';
import IconClickable from '../../../icon/component/IconClickable';
import { useAppRouter } from '../../../router';
import { useAppTranslate } from '../../../translate';
import { DateUtils } from '../../../utils/date/DateUtils';
import { I18nUtils } from '../../../utils/i18n/I18nUtils';
import { WindowUtils } from '../../../utils/window/WindowUtils';
import { useId } from '../../hook/useId';

export interface IMdCardProps {
  id?: ID;
  color?: IconColorType;
  icon?: string;
  title?: string;
  titleCount?: number;
  date?: string;
  url?: string;
  urlUpdate?: string;
  avatar?: string;
  image?: string;
  className?: string;
  children?: ReactNode;
  actions?: ReactNode;
  buttonchildren?: ReactNode;
  style?: CSSProperties;
  callback?: () => void;
  callbackLeft?: () => void;
  elementRigth?: () => React.JSX.Element;
}

const API_URL = WindowUtils.getEnv('API_URL') as string;

const MdCard: React.FC<IMdCardProps> = ({
  color = 'secondary',
  icon,
  title,
  titleCount,
  url,
  urlUpdate,
  avatar,
  image,
  date,
  callbackLeft,
  elementRigth,
  ...rest
}) => {
  const { t, Trans } = useAppTranslate();
  const { navigate } = useAppRouter();
  const { id } = useId(rest.id as string);
  const { getIcon } = useIcon();

  const handleClick = useCallback(
    (customUrl?: string) => () => {
      customUrl && navigate(customUrl);
    },
    [navigate],
  );

  return (
    <Card {...rest} id={id}>
      {image && (
        <CardMedia onClick={handleClick(url)}>
          <img alt={'Image : ' + title} src={API_URL + '/download?fileName=' + image} width='100%' height='200px' />
        </CardMedia>
      )}
      {title && (
        <CardHeader
          onClick={handleClick(url)}
          avatar={
            avatar && (
              <img alt={'Image : ' + title} src={API_URL + '/download?fileName=' + avatar} width='40px' height='40px' />
            )
          }
          action={
            <>
              {urlUpdate && <IconClickable color='primary' icon='settings' callback={handleClick(urlUpdate)} />}
              {rest.actions && <>{rest.actions}</>}
            </>
          }
          title={
            <div className='flex flex-row' style={{ alignItems: 'baseline' }}>
              {callbackLeft && <IconClickable icon='back' color='secondary' callback={callbackLeft} />}
              {icon && <>{getIcon(icon, color)}&nbsp;</>}
              <Typography variant='h1' color={color} sx={{ flex: '1' }}>
                <Trans i18nKey={I18nUtils.translate(t, title)} />
                {titleCount !== undefined && <> ({titleCount})</>}
              </Typography>
              {elementRigth?.()}
            </div>
          }
          subheader={date ? DateUtils.format(date, 'Le DD MMM YYYY à hhhmm') : ''}
        />
      )}
      {rest.children && <CardContent>{rest.children}</CardContent>}
      {rest.buttonchildren && <CardActions className='justify-end'>{rest.buttonchildren}</CardActions>}
    </Card>
  );
};

export default MdCard;
