import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Fragment, ReactNode, memo } from 'react';
import { Trans } from 'react-i18next';
import { JSONObject } from '../../../dto';
import { ObjectUtils } from '../../../utils';
import { useTable } from '../../hook/useTable';

export type TablePaginateCallbackType = (
  newPage: number,
  rowsPerPage?: number,
  sortBy?: string,
  sortByOrder?: 'asc' | 'desc',
) => void;

export interface ITableDto {
  name: string;
  label: string;
  date?: boolean;
  order?: boolean;
}

export interface IMdTableProps {
  className?: string;
  url?: string;
  cells: ITableDto[];
  datas: JSONObject[];
  sortBy?: string;
  rowsPerPage?: number;
  showEmpty?: boolean;
  sortByOrder?: 'asc' | 'desc';
  callBack?: TablePaginateCallbackType;
  children?: ReactNode;
}

const MdTable: React.FC<IMdTableProps> = memo(
  ({
    className = '',
    cells,
    sortBy = 'id',
    rowsPerPage = 10,
    sortByOrder = 'asc',
    showEmpty = false,
    callBack,
    children,
    ...rest
  }) => {
    const { datas, createSortHandle, handleClick } = useTable(
      showEmpty,
      rest.datas,
      sortByOrder ?? 'id',
      rowsPerPage ?? 10,
      rest.url,
    );

    return (
      <div>
        <Table className={className} size='small'>
          <TableHead>
            <TableRow>
              {cells?.map((cell: ITableDto) => (
                <TableCell key={cell.name}>
                  <TableSortLabel
                    active={sortBy === cell.name}
                    direction={sortBy === cell.name ? sortByOrder : 'asc'}
                    onClick={createSortHandle(cell.name, cell.order ? callBack : undefined)}
                    hideSortIcon={!cell.order}>
                    <Trans i18nKey={cell.label} />
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datas?.length === 0 ? (
              <TableRow>
                <TableCell component='th' scope='row' colSpan={cells?.length}>
                  <Trans i18nKey='NO_RESULT' />
                </TableCell>
              </TableRow>
            ) : (
              datas.map((data: JSONObject) => (
                <Fragment key={data['id' as keyof JSONObject]}>
                  {data && !data['empty' as keyof JSONObject] ? (
                    <TableRow onClick={handleClick(data['id' as keyof JSONObject])}>
                      {cells?.map((cell: ITableDto) => (
                        <TableCell
                          component='th'
                          scope='row'
                          key={cell.name}
                          title={ObjectUtils.getRecursivValue(data, cell.name, cell.date)}>
                          {ObjectUtils.getRecursivValue(data, cell.name, cell.date)}
                        </TableCell>
                      ))}
                    </TableRow>
                  ) : (
                    <TableRow key={data['id' as keyof JSONObject]}>
                      <TableCell component='th' scope='row' colSpan={cells?.length}>
                        &nbsp;
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              ))
            )}
          </TableBody>
          {children}
        </Table>
      </div>
    );
  },
);

export default MdTable;
