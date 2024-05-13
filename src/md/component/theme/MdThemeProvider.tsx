import { CssBaseline, Theme, ThemeProvider, createTheme } from '@mui/material';
import { ReactNode, memo, useEffect, useState } from 'react';
import { ITheme } from './useTheme';

interface IMdThemeProviderProps {
  theme?: ITheme;
  children: ReactNode;
}

export const MdThemeProvider: React.FC<IMdThemeProviderProps> = memo(({ theme, children }) => {
  const [muiTheme, setMuiTheme] = useState<Theme>();

  useEffect(() => {
    if (theme) {
      setMuiTheme(createTheme(theme));
    }
  }, [theme]);

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
