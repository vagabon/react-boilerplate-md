import { PropsWithChildren, createContext, useContext, useEffect, useMemo } from 'react';
import { JSONObject } from '../../dto/api/ApiDto';
import { MdThemeProvider } from '../../md/component/theme/MdThemeProvider';
import { ModeType, useTheme } from '../hook/useTheme';

export interface IThemeContextDto {
  mode: ModeType;
  switchTheme: (mode: ModeType) => () => void;
}

const ThemeContext = createContext<IThemeContextDto | null>(null);

export function useThemeContent() {
  return useContext(ThemeContext);
}

interface IThemeContextProviderProps extends PropsWithChildren {
  palette: JSONObject;
}

export const ThemeContextProvider: React.FC<IThemeContextProviderProps> = ({ palette, children }) => {
  const { mode, theme, switchTheme } = useTheme(palette);

  const value = useMemo(() => ({ mode, switchTheme }), [mode, switchTheme]);

  useEffect(() => {
    document.body.classList.remove('mode-dark');
    document.body.classList.remove('mode-light');
    document.body.classList.add('mode-' + mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={value}>
      <MdThemeProvider theme={theme}>{children}</MdThemeProvider>
    </ThemeContext.Provider>
  );
};
