import { useCallback } from 'react';
import { IApiDto } from '../../dto/api/ApiDto';
import { useRouterContext } from '../context/RouterContext';

export const useAppRouter = () => {
  const navigate = useRouterContext();

  const handleNavigate = useCallback(
    (link: string, callback?: () => void) => () => {
      navigate?.(link);
      callback?.();
    },
    [navigate],
  );

  const handleNavigateWithId = useCallback(
    (link: string, callback?: () => void) => (data: IApiDto) => {
      navigate?.(link + data.id);
      callback?.();
    },
    [navigate],
  );

  return {
    navigate,
    handleNavigate,
    handleNavigateWithId,
  };
};
