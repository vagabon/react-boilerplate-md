import { PaletteColorOptions, PaletteOptions, ThemeOptions } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { JSONObject } from '../../dto/api/ApiDto';
import { defaultMode, getTheme } from '../utils/ThemeUtils';

export interface ICustomPalette extends PaletteOptions {
  google: PaletteColorOptions;
  facebook: PaletteColorOptions;
  premium: PaletteColorOptions;
}

export interface ICustomTheme extends ThemeOptions {
  palette: ICustomPalette;
}

export type ITheme = ICustomTheme;

export interface IPaletteDto {
  primary: string;
  secondary: string;
  info: string;
  success: string;
  error: string;
  google: string;
  facebook: string;
  premium: string;
}

export type ModeType = 'light' | 'dark';

export const useTheme = (palette: JSONObject) => {
  const [mode, setMode] = useState<ModeType>(defaultMode());
  console.log(getTheme(palette, mode));
  const [theme, setTheme] = useState<ITheme>(getTheme(palette, mode));

  const showTheme = useCallback(
    (mode: ModeType) => {
      setTheme(getTheme(palette, mode));
    },
    [palette],
  );

  useEffect(() => {
    showTheme(mode);
  }, [showTheme, mode]);

  const initTheme = useCallback((mode: ModeType) => {
    localStorage.setItem('mode_theme', mode);
    setMode(mode);
  }, []);

  const switchTheme = useCallback(
    (mode: ModeType) => () => {
      initTheme(mode === 'light' ? 'dark' : 'light');
    },
    [initTheme],
  );

  return { mode, theme, initTheme, switchTheme };
};
