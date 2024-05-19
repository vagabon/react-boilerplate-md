import { render, screen } from '@testing-library/react';
import { MdAppBar } from './MdAppBar';

describe('MdAppBar', () => {
  test('Given MdAppBar When its mount Then CircularProgress is shown', () => {
    render(<MdAppBar></MdAppBar>);
    expect(screen.getByTestId('AppBar')).toBeDefined();
  });
});
