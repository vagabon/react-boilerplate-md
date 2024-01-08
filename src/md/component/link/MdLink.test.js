import { render, screen } from '@testing-library/react';
import MdLink from './MdLink';

describe('MdLink', () => {
  test('Given MdLink when its mount then Link is shown', () => {
    render(<MdLink>children</MdLink>);

    expect(screen.getByTestId('Link')).toBeDefined();
  });
});
