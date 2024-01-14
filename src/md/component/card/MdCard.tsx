import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React, { ReactNode, useCallback } from 'react';
import { ID } from '../../../dto/api/ApiDto';
import IconClickable from '../../../icon/component/IconClickable';
import { useAppRouter } from '../../../router';
import { useAppTranslate } from '../../../translate';
import { DateUtils } from '../../../utils/date/DateUtils';
import { I18nUtils } from '../../../utils/i18n/I18nUtils';
import { WindowUtils } from '../../../utils/window/WindowUtils';
import { useId } from '../../hook/useId';

export interface IMdCardProps {
  id?: ID;
  title?: string;
  date?: string;
  url?: string;
  urlUpdate?: string;
  avatar?: string;
  image?: string;
  className?: string;
  children?: ReactNode;
  buttonchildren?: ReactNode;
  callback?: () => void;
  callbackLeft?: () => void;
  elementRigth?: () => React.JSX.Element;
}

const API_URL: string = WindowUtils.getEnv('API_URL');

const MdCard: React.FC<IMdCardProps> = ({
  title,
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

  const handleClick = useCallback(
    (customUrl?: string) => () => {
      customUrl && navigate(customUrl);
    },
    [navigate],
  );

  return (
    <Card {...rest} id={id}>
      {title && (
        <CardHeader
          onClick={handleClick(url)}
          avatar={
            avatar && (
              <img alt={'Image : ' + title} src={API_URL + '/download?fileName=' + avatar} width='40px' height='40px' />
            )
          }
          action={urlUpdate && <IconClickable color='primary' icon='settings' callback={handleClick(urlUpdate)} />}
          title={
            <div className='flex flex-row' style={{ gap: '1rem' }}>
              {callbackLeft && <IconClickable icon='back' color='secondary' callback={callbackLeft} />}
              <Typography variant='h4' color='secondary' sx={{ flex: '1' }}>
                <Trans i18nKey={I18nUtils.translate(t, title)} />
              </Typography>
              {elementRigth?.()}
            </div>
          }
          subheader={date ? DateUtils.format(date, 'Le DD MMM YYYY à hhhmm') : ''}
        />
      )}
      {image && (
        <CardMedia>
          <img alt={'Image : ' + title} src={API_URL + '/download?fileName=' + image} width='100%' height='150px' />
        </CardMedia>
      )}
      <CardContent>{rest.children}</CardContent>
      {rest.buttonchildren && <CardActions className='justify-end'>{rest.buttonchildren}</CardActions>}
    </Card>
  );
};

export default MdCard;
