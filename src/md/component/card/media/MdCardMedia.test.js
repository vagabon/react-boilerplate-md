import { render, screen } from '@testing-library/react';
import MdCardMedia from './MdCardMedia';

describe('MdCardMedia', () => {
  test('Given MdCardMedia when its mount then CardMedia is shown', () => {
    render(<MdCardMedia></MdCardMedia>);
    expect(screen.getByTestId('CardMedia')).toBeDefined();
  });
});
