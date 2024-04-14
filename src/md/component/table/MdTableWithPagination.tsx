import { TableFooter, TablePagination, TableRow } from '@mui/material';
import { memo, useCallback } from 'react';
import { useAppTranslate } from '../../../translate';
import MdTable, { IMdTableProps, TablePaginateCallbackType } from './MdTable';

export interface IMdTableWithPaginationProps extends IMdTableProps {
  count: number;
  page: number;
}

const MdTableWithPagination: React.FC<IMdTableWithPaginationProps> = memo((props: IMdTableWithPaginationProps) => {
  const { Trans } = useAppTranslate();

  const handleChangePage = useCallback(
    (callBack?: TablePaginateCallbackType) =>
      (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
        event?.stopPropagation();
        callBack?.(newPage, props.rowsPerPage, props.sortBy, props.sortByOrder);
      },
    [props.rowsPerPage, props.sortBy, props.sortByOrder],
  );

  const handleChangeRowsPerPage = useCallback(
    (callBack?: TablePaginateCallbackType) =>
      (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        callBack?.(props.page, parseInt(event.target.value), props.sortBy, props.sortByOrder);
      },
    [props.page, props.sortBy, props.sortByOrder],
  );

  return (
    <div style={{ display: 'grid' }}>
      <h4>
        <Trans i18nKey='RESULTAT' /> : {props.count}
      </h4>
      <div style={{ overflow: 'auto' }}>
        <MdTable {...props}>
          <TableFooter>
            <TableRow></TableRow>
          </TableFooter>
        </MdTable>
      </div>
      <TablePagination
        component='div'
        rowsPerPageOptions={[5, 10, 20, 50]}
        count={props.count}
        rowsPerPage={props.rowsPerPage ?? 10}
        page={props.page}
        onPageChange={handleChangePage(props.callBack)}
        onRowsPerPageChange={handleChangeRowsPerPage(props.callBack)}
      />
    </div>
  );
});

export default MdTableWithPagination;
