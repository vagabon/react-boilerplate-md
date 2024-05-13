import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

const theme = createTheme();

export const withMuiTheme = (Story, context) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story {...context} />
  </ThemeProvider>
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
