import { render, screen } from '@testing-library/react';
import { MdCircularProgress } from './MdCircularProgress';

describe('MdCircularProgress', () => {
  test('Given MdCircularProgress When its mount Then CircularProgress is shown', () => {
    render(<MdCircularProgress></MdCircularProgress>);
    expect(screen.getByTestId('CircularProgress')).toBeDefined();
  });
});
