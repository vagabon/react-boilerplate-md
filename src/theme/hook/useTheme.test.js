import { renderHook, waitFor } from '@testing-library/react';
import { useTheme } from './useTheme';

const palette = {
  primary: '$primary',
  secondary: '$secondary',
  info: '$info',
  success: '$success',
  error: '$error',
  'primary-dark': '$primary-dark',
  'secondary-dark': '$secondary-dark',
  'info-dark': '$info-dark',
  'success-dark': '$success-dark',
  'error-dark': '$error-dark',
  google: '$google',
  facebook: '$facebook',
};

describe('useTheme', () => {
  test('Given useTheme when is mount Then ', async () => {
    const { result } = renderHook(() => useTheme(palette));

    await waitFor(() => {
      result.current.switchTheme('light')();
    });

    await waitFor(() => {
      result.current.switchTheme('dark')();
    });
  });
});
