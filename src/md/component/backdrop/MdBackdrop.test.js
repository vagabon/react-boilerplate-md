import { render, screen } from '@testing-library/react';
import { MdBackdrop } from './MdBackdrop';

describe('MdBackdrop', () => {
  test('Given MdBackdrop when its mount then Alert is shown', () => {
    render(<MdBackdrop open={true} />);
    expect(screen.getByTestId('Backdrop')).toBeDefined();
  });
});
