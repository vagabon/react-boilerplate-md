import { fireEvent, render, screen } from '@testing-library/react';
import { MdDrawer } from './MdDrawer';

describe('MdDrawer', () => {
  test('Given MdDrawer when its mount then Divider is shown', () => {
    const callbackClose = jest.fn();
    render(<MdDrawer callbackClose={callbackClose} />);
    expect(screen.getByTestId('Drawer')).toBeDefined();
    fireEvent.click(screen.getByTestId('Drawer'));
    expect(callbackClose).toHaveBeenCalled();
  });
});
