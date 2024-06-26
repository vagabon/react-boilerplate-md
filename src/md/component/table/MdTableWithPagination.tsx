import { TableFooter, TablePagination, TableRow } from '@mui/material';
import { memo, useCallback } from 'react';
import { MdTypo } from '../typo/MdTypo';
import { IMdTableProps, MdTable, TablePaginateCallbackType } from './MdTable';

export interface IMdTableWithPaginationProps extends IMdTableProps {
  count: number;
  page: number;
}

export const MdTableWithPagination: React.FC<IMdTableWithPaginationProps> = memo(({ ...rest }) => {
  const handleChangePage = useCallback(
    (callBack?: TablePaginateCallbackType) =>
      (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
        event?.stopPropagation();
        callBack?.(newPage, rest.rowsPerPage, rest.sortBy, rest.sortByOrder);
      },
    [rest.rowsPerPage, rest.sortBy, rest.sortByOrder],
  );

  const handleChangeRowsPerPage = useCallback(
    (callBack?: TablePaginateCallbackType) =>
      (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        callBack?.(rest.page, parseInt(event.target.value), rest.sortBy, rest.sortByOrder);
      },
    [rest.page, rest.sortBy, rest.sortByOrder],
  );

  return (
    <div className='grid'>
      <div className='table-result'>
        <MdTypo content='RESULTAT' after={': ' + rest.count} />
      </div>
      <div className='overflow'>
        <MdTable {...rest}>
          <TableFooter>
            <TableRow></TableRow>
          </TableFooter>
        </MdTable>
      </div>
      <TablePagination
        component='div'
        rowsPerPageOptions={[5, 10, 20, 50]}
        count={rest.count}
        rowsPerPage={rest.rowsPerPage ?? 10}
        page={rest.page}
        onPageChange={handleChangePage(rest.callBack)}
        onRowsPerPageChange={handleChangeRowsPerPage(rest.callBack)}
      />
    </div>
  );
});
