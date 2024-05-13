import { useCallback, useEffect, useState } from 'react';
import { JSONObject } from '../../dto/api/ApiDto';
import { useAppRouter } from '../../router/hook/useAppRouter';
import { UuidUtils } from '../../utils/uuid/UuidUtils';
import { TablePaginateCallbackType } from '../component/table/MdTable';

export const useTable = (
  showEmpty: boolean | undefined,
  rowDatas: JSONObject[],
  sortByOrder: string,
  rowsPerPage: number,
  url?: string,
) => {
  const { navigate } = useAppRouter();
  const [datas, setDatas] = useState<JSONObject[]>([]);

  useEffect(() => {
    const newDatas: JSONObject[] = [];
    for (let i = 0; i < rowsPerPage; i++) {
      if (rowDatas[i]) {
        newDatas.push(rowDatas[i]);
      } else {
        showEmpty && newDatas.push({ empty: true, id: UuidUtils.createUUID() });
      }
    }
    setDatas(newDatas);
  }, [showEmpty, rowDatas, rowsPerPage]);

  const createSortHandle = useCallback(
    (property: string, callBack?: TablePaginateCallbackType) => (): void => {
      callBack?.(0, rowsPerPage, property, sortByOrder === 'asc' ? 'desc' : 'asc');
    },
    [rowsPerPage, sortByOrder],
  );

  const handleClick = useCallback(
    (id: string) => () => {
      url && navigate(url + id);
    },
    [navigate, url],
  );

  return { datas, createSortHandle, handleClick };
};
