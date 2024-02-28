import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IApiDto, JSONObject, Primitif } from '../../../dto/api/ApiDto';
import { UuidUtils } from '../../../utils';
import MdFormSelect from '../form/select/MdFormSelect';
import MdInputTextSimple from '../form/text/MdInputTextSimple';

export interface IMdSearchBarProps {
  search: Primitif;
  order?: string;
  orderList?: IApiDto[];
  callBack: (value: string) => void;
  callBackOrder?: (value?: string | JSONObject) => void;
}

const MdSearchBar: React.FC<IMdSearchBarProps> = ({ order, orderList, ...props }) => {
  const [defaultValue, setDefaultValue] = useState<string>('');
  const [key, setKey] = useState<string>(UuidUtils.createUUID());
  const lastValue = useRef<string>('');

  useEffect(() => {
    setDefaultValue(props.search as string);
    setKey(UuidUtils.createUUID());
  }, [props.search]);

  const handleChange = useCallback(
    (callback: (value: string) => void) => (event: React.ChangeEvent<JSONObject>) => {
      const value = event.target['value' as keyof JSONObject];
      lastValue.current !== value && callback(value);
      lastValue.current = value;
    },
    [],
  );

  const handleReset = useCallback(
    (callback: (value: string) => void) => () => {
      setDefaultValue('');
      callback('');
    },
    [],
  );

  const handleKeyEnter = useCallback(
    (callback: (value: string) => void) => (target: { name: string; value: string }) => {
      handleChange(callback)({ target } as unknown as React.ChangeEvent<JSONObject>);
    },
    [handleChange],
  );

  return (
    <div className='search-bar'>
      <MdInputTextSimple
        key={key}
        name='searching'
        handleBlur={handleChange(props.callBack)}
        handleKeyEnter={handleKeyEnter(props.callBack)}
        label='SEARCH'
        variant='outlined'
        placeholder='SEARCH...'
        size='small'
        value={defaultValue}
        inputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon sx={{ fontSize: 20 }} />
            </InputAdornment>
          ),
          endAdornment: (
            <IconButton
              sx={{ visibility: defaultValue !== '' ? 'visible' : 'hidden' }}
              onClick={handleReset(props.callBack)}>
              <ClearIcon />
            </IconButton>
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
};

export default MdSearchBar;
