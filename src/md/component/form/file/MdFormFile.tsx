import { ChangeEvent, memo, useCallback } from 'react';
import { JSONObject } from '../../../../dto/api/ApiDto';
import { Translate } from '../../../../translate/component/Translate';
import { useId } from '../../../hook/useId';
import { MdBox } from '../../box/MdBox';

export interface IMdFormFileProps {
  name: string;
  label?: string;
  values?: JSONObject;
  accept?: string;
  handleChangeFile: (name: string, file: File) => void;
}

export const MdFormFile: React.FC<IMdFormFileProps> = memo(({ accept, ...rest }) => {
  const { id } = useId();

  const handleCapture = useCallback(
    (callback: (name: string, file: File) => void) =>
      ({ target }: ChangeEvent<HTMLInputElement & { files: FileList }>) => {
        callback(rest.name, target.files[0]);
      },
    [rest.name],
  );

  return (
    <MdBox className='form-file'>
      {rest.label && (
        <label className='flex1' htmlFor={id}>
          <Translate i18nKey={rest.label} />
        </label>
      )}
      <div className='label'>
        <p className='ellipsis' title={rest.values?.[rest.name as keyof JSONObject]}>
          {rest.values?.[rest.name as keyof JSONObject]}
        </p>
      </div>
      <input
        name={rest.name}
        accept={accept ?? 'image/*'}
        id={id}
        onChange={handleCapture(rest.handleChangeFile)}
        type='file'
      />
    </MdBox>
  );
});
