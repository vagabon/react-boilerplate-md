import { render, screen } from '@testing-library/react';
import { MdTooltip } from './MdTooltip';

describe('MdTooltip', () => {
  test('Given MdTooltip when its mount then ButtonGroup is shown', () => {
    render(<MdTooltip>Content</MdTooltip>);
    expect(screen.getByTestId('Tooltip')).toBeDefined();
  });
});
