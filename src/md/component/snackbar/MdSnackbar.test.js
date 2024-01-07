import { render, screen } from '@testing-library/react';
import MdSnackbar from './MdSnackbar';

describe('MdSnackbar', () => {
  test('Given MdSnackbar when its mount then Snackbar is shown', () => {
    render(<MdSnackbar>Content</MdSnackbar>);
    expect(screen.getByTestId('Snackbar')).toBeDefined();
  });
});
