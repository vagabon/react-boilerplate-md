import { Fragment, memo } from 'react';
import { useAppTranslate } from '../../../translate/hook/useAppTranslate';
import { MdTypo } from '../typo/MdTypo';

export interface IListSimpleDto {
  label: string;
}

export interface IMdListSimpleProps {
  className?: string;
  title: string;
  items: IListSimpleDto[];
}

export const MdListSimple: React.FC<IMdListSimpleProps> = memo(({ className, title, items }) => {
  const { t } = useAppTranslate();

  return (
    <ul className={className}>
      <MdTypo label={title} />
      {items?.map((item) => (
        <Fragment key={item.label}>
          {t(item.label) !== '' && (
            <li style={{ marginTop: '10px' }}>
              <MdTypo label={item.label} />
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
});
