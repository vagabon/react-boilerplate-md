import { fireEvent, render, screen } from '@testing-library/react';
import { IconClickable } from './IconClickable';

describe('IconClickable', () => {
  test('Given IconClickable when its mount then ', () => {
    const callback = jest.fn();
    render(<IconClickable icon='delete' color='primary' disabled={false} callback={callback} />);
    fireEvent.click(screen.getByTestId('IconButton'));
    expect(callback).toBeCalled();
  });
});
