import { Fragment, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Translate } from '../../../translate/component/Translate';

export interface IListSimpleDto {
  label: string;
}

export interface IMdListSimpleProps {
  className?: string;
  title: string;
  items: IListSimpleDto[];
}

export const MdListSimple: React.FC<IMdListSimpleProps> = memo(({ className, title, items }) => {
  const { t } = useTranslation();

  return (
    <ul className={className}>
      <Translate i18nKey={title} />
      {items?.map((item) => (
        <Fragment key={item.label}>
          {t(item.label) !== '' && (
            <li style={{ marginTop: '10px' }}>
              <Translate i18nKey={item.label} />
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
});
