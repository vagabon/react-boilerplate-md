import { RefObject, createContext, useContext } from "react";
import { NavigateFunction } from "react-router-dom";

export interface IRouterContextDto {
  navigate: RefObject<NavigateFunction>;
}

export const RouterContext = createContext<IRouterContextDto | null>(null);

export function useRouterContext() {
  const routerContext = useContext(RouterContext);
  if (routerContext?.navigate.current === null)
    throw new Error("StableNavigate context is not initialized");

  return routerContext?.navigate.current;
}
