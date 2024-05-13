import { fireEvent, render, screen } from '@testing-library/react';
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
    render(<MdButton url='url' />);
    expect(screen.getByTestId('Button')).toBeDefined();
    fireEvent.click(screen.getByTestId('Button'));
    expect(mockNavigate).toBeCalled();
  });
});
