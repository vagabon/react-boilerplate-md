import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { PropsWithChildren, memo, useMemo } from 'react';
import { ITheme } from '../../../theme/hook/useTheme';

interface IMdThemeProviderProps extends PropsWithChildren {
  theme?: ITheme;
}

export const MdThemeProvider: React.FC<IMdThemeProviderProps> = memo(({ theme, children }) => {
  const muiTheme = useMemo(() => createTheme(theme), [theme]);

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
});
