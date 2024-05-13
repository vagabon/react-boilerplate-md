import { TableFooter, TablePagination, TableRow } from '@mui/material';
import { memo, useCallback } from 'react';
import { useAppTranslate } from '../../../translate/hook/useAppTranslate';
import { IMdTableProps, MdTable, TablePaginateCallbackType } from './MdTable';

export interface IMdTableWithPaginationProps extends IMdTableProps {
  count: number;
  page: number;
}

export const MdTableWithPagination: React.FC<IMdTableWithPaginationProps> = memo(({ ...rest }) => {
  const { Trans } = useAppTranslate();

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
    <div style={{ display: 'grid' }}>
      <div style={{ margin: '5px 0px', fontSize: '1.2rem' }}>
        <Trans i18nKey='RESULTAT' /> : {rest.count}
      </div>
      <div style={{ overflow: 'auto' }}>
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
