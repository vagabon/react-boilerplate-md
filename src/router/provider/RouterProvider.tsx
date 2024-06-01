import { PropsWithChildren, memo, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterContext } from '../context/RouterContext';

export interface IRouterProviderProps extends PropsWithChildren {}

export const RouterProvider: React.FC<IRouterProviderProps> = memo(({ children }) => {
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);

  const value = useMemo(() => ({ navigate: navigateRef }), [navigateRef]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
});
