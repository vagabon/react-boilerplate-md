import { fireEvent, render, screen } from '@testing-library/react';
import MdInputText from './MdInputText';

describe('MdInputText', () => {
  test('Given MdInputText when its mount then Grid is shown', () => {
    const mockChange = jest.fn();
    const mockBlur = jest.fn();
    const mockSubmit = jest.fn();

    render(
      <MdInputText
        className='class'
        label='label'
        name='name'
        type='text'
        required={true}
        handleChange={mockChange}
        handleBlur={mockBlur}
        handleSubmit={mockSubmit}
      />,
    );

    expect(screen.getByTestId('TextField')).toBeDefined();

    fireEvent.change(screen.getByTestId('TextField'), { target: { value: 'value' } });
    expect(mockChange).toBeCalled();

    fireEvent.focus(screen.getByTestId('TextField'));

    fireEvent.blur(screen.getByTestId('TextField'));
    expect(mockBlur).toBeCalled();

    fireEvent.keyUp(screen.getByTestId('TextField'));
    expect(mockSubmit).toBeCalled();
  });
});
