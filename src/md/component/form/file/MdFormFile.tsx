import { Box } from '@mui/material';
import { ChangeEvent, memo, useCallback } from 'react';
import { JSONObject } from '../../../../dto/api/ApiDto';
import { Translate } from '../../../../translate/component/Translate';
import { useId } from '../../../hook/useId';

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
    <Box
      sx={{ width: '100%', margin: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {rest.label && (
        <label htmlFor={id} style={{ flex: '1' }}>
          <Translate i18nKey={rest.label} />
        </label>
      )}
      <div className='' style={{ maxWidth: '18%', margin: '0px 5px' }}>
        <p
          style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
          title={rest.values?.[rest.name as keyof JSONObject]}>
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
    </Box>
  );
});
