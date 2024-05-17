import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ReactNode, memo, useMemo } from 'react';
import { ITheme } from './useTheme';

interface IMdThemeProviderProps {
  theme?: ITheme;
  children: ReactNode;
}

export const MdThemeProvider: React.FC<IMdThemeProviderProps> = memo(({ theme, children }) => {
  const muiTheme = useMemo(() => createTheme(theme), [theme]);

  return (
    <>
      {muiTheme && (
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      )}
    </>
  );
});
