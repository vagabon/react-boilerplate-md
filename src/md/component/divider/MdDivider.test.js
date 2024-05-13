import { render, screen } from '@testing-library/react';
import { MdDivider } from './MdDivider';

describe('MdDivider', () => {
  test('Given MdDivider when its mount then Divider is shown', () => {
    render(<MdDivider />);
    expect(screen.getByTestId('Divider')).toBeDefined();
  });
});
