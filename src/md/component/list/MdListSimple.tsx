import { Fragment, memo } from 'react';
import { Translate } from '../../../translate/component/Translate';
import { useTranslate } from '../../../translate/hook/useTranslate';

export interface IListSimpleDto {
  label: string;
}

export interface IMdListSimpleProps {
  className?: string;
  title: string;
  items: IListSimpleDto[];
}

export const MdListSimple: React.FC<IMdListSimpleProps> = memo(({ className, title, items }) => {
  const { translate } = useTranslate();

  return (
    <ul className={className}>
      <Translate i18nKey={title} />
      {items?.map((item) => (
        <Fragment key={item.label}>
          {translate(item.label) !== '' && (
            <li className='margin-top10'>
              <Translate i18nKey={item.label} />
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
});
