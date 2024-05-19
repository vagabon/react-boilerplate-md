import { render, screen } from '@testing-library/react';
import { ThemeContextProvider } from './ThemeContext';

describe('ThemeContext', () => {
  test('Given ThemeContext when its mount then MdThemeProvider is shown', () => {
    render(<ThemeContextProvider palette={{}} />);
    expect(screen.getByTestId('ThemeProvider')).toBeDefined();
  });
});
