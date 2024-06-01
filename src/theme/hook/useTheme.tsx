import { PaletteColorOptions, PaletteOptions, ThemeOptions } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { JSONObject } from '../../dto/api/ApiDto';
import { DEFAULT_THEME } from '../../md/conf/MdThemeConf';
import { ObjectUtils } from '../../utils/object/ObjectUtils';

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

const defaultMode = () => {
  let storageMode = localStorage.getItem('mode_theme');
  if (storageMode !== 'light' && storageMode !== 'dark') {
    const darkBrowser = window.matchMedia('(prefers-color-scheme: dark)');
    storageMode = darkBrowser?.matches ? 'dark' : 'light';
  }
  return storageMode as ModeType;
};

const getTheme = (palette: JSONObject, mode: 'light' | 'dark'): ITheme => {
  const suffixe = mode === 'dark' ? '-dark' : '';
  return {
    ...DEFAULT_THEME,
    palette: {
      ...DEFAULT_THEME.palette,
      mode: mode,
      background: {
        default: mode === 'dark' ? '#121212' : '#F2F2F2',
      },
      primary: {
        main: ObjectUtils.getDtoString(palette, 'primary' + suffixe),
        dark: '',
      },
      secondary: {
        main: ObjectUtils.getDtoString(palette, 'secondary' + suffixe),
        dark: '',
      },
      info: {
        main: ObjectUtils.getDtoString(palette, 'info' + suffixe),
        dark: '',
      },
      success: {
        main: ObjectUtils.getDtoString(palette, 'success' + suffixe),
        dark: '',
      },
      error: {
        main: ObjectUtils.getDtoString(palette, 'error' + suffixe),
        dark: '',
      },
      google: {
        main: ObjectUtils.getDtoString(palette, 'google'),
        dark: '',
      },
      facebook: {
        main: ObjectUtils.getDtoString(palette, 'facebook'),
        dark: '',
      },
      premium: {
        main: ObjectUtils.getDtoString(palette, 'premium'),
        dark: '',
      },
    },
  };
};

export const useTheme = (palette: JSONObject) => {
  const [mode, setMode] = useState<ModeType>(defaultMode());
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

  const switchTheme = useCallback(
    (newMode: ModeType) => () => {
      const newModeAsync = newMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('mode_theme', newModeAsync);
      setMode(newModeAsync);
    },
    [],
  );

  return { mode, theme, switchTheme };
};
