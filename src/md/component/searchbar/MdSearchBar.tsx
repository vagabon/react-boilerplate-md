import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { JSONObject, Primitif } from '../../../dto/api/ApiDto';
import MdInputTextSimple from '../form/text/MdInputTextSimple';

export interface IMdSearchBarProps {
  search: Primitif;
  callBack: (value: string) => void;
}

const MdSearchBar: React.FC<IMdSearchBarProps> = (props) => {
  const [defaultValue, setDefaultValue] = useState<string>('');

  useEffect(() => {
    setDefaultValue(props.search as string);
  }, [props.search]);

  const handleChange = useCallback(
    (callback: (value: string) => void) => (event: React.ChangeEvent<JSONObject>) => {
      callback(event.target['value' as keyof JSONObject]);
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
      callback(target['value' as keyof JSONObject]);
    },
    [],
  );

  return (
    <section className='search-bar'>
      <MdInputTextSimple
        name='searching'
        handleBlur={handleChange(props.callBack)}
        handleKeyEnter={handleKeyEnter(props.callBack)}
        label='SEARCH'
        variant='outlined'
        placeholder='Search...'
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
    </section>
  );
};

export default MdSearchBar;
