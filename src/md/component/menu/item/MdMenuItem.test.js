import { render, screen } from '@testing-library/react';
import { MdMenuItem } from './MdMenuItem';

jest.useFakeTimers();

test('given MdMenuItem when mount then', () => {
  render(<MdMenuItem>{() => <></>}</MdMenuItem>);
  expect(screen.getByTestId('MenuItem')).toBeDefined();
});
