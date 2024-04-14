import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { ChangeEvent, memo, useCallback } from 'react';
import { IApiDto, JSONObject, Primitif } from '../../../dto/api/ApiDto';
import MdFormSelect from '../form/select/MdFormSelect';
import MdInputTextSimple from '../form/text/MdInputTextSimple';

export interface IMdSearchBarProps {
  className?: string;
  search: Primitif;
  order?: string;
  orderList?: IApiDto[];
  callBack: (value: string) => void;
  callBackOrder?: (value?: string | JSONObject) => void;
}

const MdSearchBar: React.FC<IMdSearchBarProps> = memo(({ className = '', order, orderList, ...props }) => {
  const handleBlur = useCallback(
    (callback: (value: string) => void) => (event: React.ChangeEvent<JSONObject>) => {
      const value = event.target['value' as keyof JSONObject];
      callback(value);
    },
    [],
  );

  const handleReset = useCallback(
    (callback: (value: string) => void) => () => {
      callback('');
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
        handleBlur={handleBlur(props.callBack)}
        handleKeyEnter={handleKeyEnter(props.callBack)}
        callbackReset={handleReset(props.callBack)}
        label='SEARCH'
        variant='outlined'
        placeholder='SEARCH...'
        size='small'
        value={props.search}
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
          callBack={props.callBackOrder}
          list={orderList as IApiDto[]}
          values={{ order }}
        />
      )}
    </div>
  );
});

export default MdSearchBar;
