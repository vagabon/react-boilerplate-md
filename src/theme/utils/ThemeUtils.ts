import { JSONObject } from '../../dto/api/ApiDto';
import { DEFAULT_THEME } from '../../md/conf/MdThemeConf';
import { ObjectUtils } from '../../utils/object/ObjectUtils';
import { ITheme, ModeType } from '../hook/useTheme';

export const defaultMode = () => {
  let storageMode = localStorage.getItem('mode_theme');
  if (storageMode !== 'light' && storageMode !== 'dark') {
    const darkBrowser = window.matchMedia('(prefers-color-scheme: dark)');
    storageMode = darkBrowser?.matches ? 'dark' : 'light';
  }
  return storageMode as ModeType;
};

export const getTheme = (palette: JSONObject, mode: 'light' | 'dark'): ITheme => {
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
      },
      secondary: {
        main: ObjectUtils.getDtoString(palette, 'secondary' + suffixe),
      },
      info: {
        main: ObjectUtils.getDtoString(palette, 'info' + suffixe),
      },
      success: {
        main: ObjectUtils.getDtoString(palette, 'success' + suffixe),
      },
      error: {
        main: ObjectUtils.getDtoString(palette, 'error' + suffixe),
      },
      google: {
        main: ObjectUtils.getDtoString(palette, 'google'),
      },
      facebook: {
        main: ObjectUtils.getDtoString(palette, 'facebook'),
      },
      premium: {
        main: ObjectUtils.getDtoString(palette, 'premium'),
      },
    },
  };
};
