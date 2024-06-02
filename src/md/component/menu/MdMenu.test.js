import { render, screen } from '@testing-library/react';
import { MdMenu } from './MdMenu';

jest.useFakeTimers();

test('given MdMenu when mount then', () => {
  render(<MdMenu>{() => <></>}</MdMenu>);
  expect(screen.getByTestId('Menu')).toBeDefined();
});
