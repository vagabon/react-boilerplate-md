import { render, screen } from '@testing-library/react';
import MdGrid from './MdGrid';

describe('MdGrid', () => {
  test('Given MdGrid when its mount then Grid is shown', () => {
    render(<MdGrid>children</MdGrid>);

    expect(screen.getByTestId('Grid')).toBeDefined();
  });
});
