import { render, screen } from '@testing-library/react';
import { MdCollapse } from './MdCollapse';

describe('MdCollapse', () => {
  test('Given MdCollapse when its mount then Collapse is shown', () => {
    render(<MdCollapse />);
    expect(screen.getByTestId('Collapse')).toBeDefined();
  });
});
