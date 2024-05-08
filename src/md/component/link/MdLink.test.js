import { render, screen } from '@testing-library/react';
import MdLink from './MdLink';

describe('MdLink', () => {
  test('Given MdLink when its mount then Link is shown', () => {
    render(<MdLink href='url' label='label' />);

    expect(screen.getByTestId('Link')).toBeDefined();
  });
});
