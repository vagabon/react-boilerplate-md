import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Fragment, ReactNode, memo, useCallback, useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { JSONObject } from '../../../dto';
import { useAppRouter } from '../../../router';
import { ObjectUtils, UuidUtils } from '../../../utils';

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
  ({ cells, sortBy = 'id', rowsPerPage = 10, sortByOrder = 'asc', showEmpty = false, callBack, children, ...rest }) => {
    const { navigate } = useAppRouter();
    const [datas, setDatas] = useState<JSONObject[]>([]);

    useEffect(() => {
      const newDatas: JSONObject[] = [];
      for (let i = 0; i < rowsPerPage; i++) {
        if (rest.datas[i]) {
          newDatas.push(rest.datas[i]);
        } else {
          showEmpty && newDatas.push({ empty: true, id: UuidUtils.createUUID() });
        }
      }
      setDatas(newDatas);
    }, [showEmpty, rest.datas, rowsPerPage]);

    const createSortHandle = useCallback(
      (property: string, callBack?: TablePaginateCallbackType) => (): void => {
        callBack?.(0, rowsPerPage, property, sortByOrder === 'asc' ? 'desc' : 'asc');
      },
      [rowsPerPage, sortByOrder],
    );

    const handleClick = useCallback(
      (id: string) => () => {
        rest.url && navigate(rest.url + id);
      },
      [navigate, rest.url],
    );

    return (
      <div>
        <Table size='small'>
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
