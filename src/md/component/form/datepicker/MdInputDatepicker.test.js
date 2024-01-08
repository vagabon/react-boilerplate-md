import { fireEvent, render, screen } from '@testing-library/react';
import MdInputDatepicker from './MdInputDatepicker';

describe('MdInputDatepicker', () => {
  test('Given MdInputDatepicker when its mount then select is shown', () => {
    const callBack = jest.fn();
    render(
      <MdInputDatepicker
        className='classname'
        label='label'
        name='date'
        state={{ date: '2024-01-01T20:30:00' }}
        handleChange={callBack}
      />,
    );
    expect(screen.getByTestId('DateTimePicker')).toBeDefined();
    screen.debug();
    fireEvent.change(screen.getByTestId('DateTimePicker'), { target: { value: '2025-01-01T20:30:00' } });
    expect(callBack).toBeCalled();
  });
});
