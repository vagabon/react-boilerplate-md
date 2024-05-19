import { render, screen } from '@testing-library/react';
import { MdSkeleton } from './MdSkeleton';

describe('MdSkeleton', () => {
  test('Given MdSkeleton when its mount then ButtonGroup is shown', () => {
    render(<MdSkeleton>Content</MdSkeleton>);
    expect(screen.getByTestId('Skeleton')).toBeDefined();
  });
});
