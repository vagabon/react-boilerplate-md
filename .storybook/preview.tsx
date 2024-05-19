import { CssBaseline } from '@mui/material';
import React from 'react';
import '../src/assets/boilerplate.scss';
import '../src/i18n/i18n';
import { MdThemeProvider } from '../src/md/component/theme/MdThemeProvider';
import { DEFAULT_THEME } from '../src/md/conf/MdThemeConf';

export const withMuiTheme = (Story, context) => (
  <MdThemeProvider theme={DEFAULT_THEME}>
    <CssBaseline />
    <Story {...context} />
  </MdThemeProvider>
);

export const decorators = [withMuiTheme];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
