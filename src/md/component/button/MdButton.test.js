import { fireEvent, render, screen } from '@testing-library/react';
import { RouterProvider } from '../../../router/provider/RouterProvider';
import { MdButton } from './MdButton';

describe('MdButton', () => {
  test('Given MdButton when its mount then Button is shown', () => {
    const mockCallback = jest.fn();
    render(<MdButton callback={mockCallback} />);
    expect(screen.getByTestId('Button')).toBeDefined();
    fireEvent.click(screen.getByTestId('Button'));
    expect(mockCallback).toBeCalled();
  });

  test('Given MdButton when its mount with url and click then navigate is called', () => {
    render(
      <RouterProvider>
        <MdButton url='url' />
      </RouterProvider>,
    );
    expect(screen.getByTestId('Button')).toBeDefined();
    fireEvent.click(screen.getByTestId('Button'));
    expect(mockNavigate).toBeCalled();
  });
});
