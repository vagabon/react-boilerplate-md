import { useCallback } from 'react';
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  ScrollRestoration,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { IApiDto } from '../../dto/api/ApiDto';

export const useAppRouter = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const handleNavigate = useCallback(
    (link: string, callback?: () => void) => () => {
      navigate(link);
      callback?.();
    },
    [navigate],
  );

  const handleNavigateWithId = useCallback(
    (link: string, callback?: () => void) => (data: IApiDto) => {
      navigate(link + data.id);
      callback?.();
    },
    [navigate],
  );

  return {
    params,
    navigate,
    location,
    useLocation,
    Link,
    Navigate,
    BrowserRouter,
    Route,
    Routes,
    ScrollRestoration,
    handleNavigate,
    handleNavigateWithId,
  };
};
