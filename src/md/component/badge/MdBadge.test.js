import { render, screen } from '@testing-library/react';
import MdBadge from './MdBadge';

describe('MdBadge', () => {
  test('Given MdBadge when its mount then Box is shown', () => {
    render(<MdBadge />);
    expect(screen.getByTestId('Badge')).toBeDefined();
  });
});
