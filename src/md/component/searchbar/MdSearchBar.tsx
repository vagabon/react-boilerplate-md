import { Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { ChangeEvent, memo, useCallback, useRef } from 'react';
import { IApiDto, JSONObject, Primitif } from '../../../dto/api/ApiDto';
import { MdFormSelect } from '../form/select/MdFormSelect';
import { MdInputTextSimple } from '../form/text/MdInputTextSimple';

export interface IMdSearchBarProps {
  className?: string;
  search: Primitif;
  order?: string;
  orderList?: IApiDto[];
  callBack: (value: string) => void;
  callBackOrder?: (value?: string | JSONObject) => void;
}

export const MdSearchBar: React.FC<IMdSearchBarProps> = memo(({ className = '', order, orderList, ...rest }) => {
  const lastSearch = useRef<string>('');

  const handleBlur = useCallback(
    (callback: (value: string) => void) => (event: React.ChangeEvent<JSONObject>) => {
      const value = event.target['value' as keyof JSONObject];
      if (lastSearch.current !== value) {
        lastSearch.current = value;
        callback(value);
      }
    },
    [],
  );

  const handleReset = useCallback(
    (callback: (value: string) => void) => () => {
      if (lastSearch.current !== '') {
        lastSearch.current = '';
        callback('');
      }
    },
    [],
  );

  const handleKeyEnter = useCallback(
    (callback: (value: string) => void) => (target: { name: string; value: string }) => {
      handleBlur(callback)({ target } as unknown as ChangeEvent<JSONObject>);
    },
    [handleBlur],
  );

  return (
    <div className={'search-bar ' + className}>
      <MdInputTextSimple
        name='searching'
        handleBlur={handleBlur(rest.callBack)}
        handleKeyEnter={handleKeyEnter(rest.callBack)}
        callbackReset={handleReset(rest.callBack)}
        label='SEARCH'
        variant='outlined'
        placeholder='SEARCH...'
        size='small'
        value={rest.search}
        inputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon sx={{ fontSize: 20 }} />
            </InputAdornment>
          ),
        }}
      />
      {order && (
        <MdFormSelect
          byId={false}
          defaultValue={false}
          label='ORDER.TITLE'
          name='order'
          callBack={rest.callBackOrder}
          list={orderList as IApiDto[]}
          values={{ order }}
        />
      )}
    </div>
  );
});
