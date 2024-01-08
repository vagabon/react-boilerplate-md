import { fireEvent, render, screen } from '@testing-library/react';
import MdFormSwitch from './MdFormSwitch';

describe('MdFormSwitch', () => {
  test('Given MdFormSwitch when its mount then Switch is shown', () => {
    const handleChange = jest.fn();
    render(<MdFormSwitch label='label' name='name' values={{ name: false }} errors={[]} handleChange={handleChange} />);
    expect(screen.getByTestId('Switch')).toBeDefined();
    fireEvent.change(screen.getByTestId('Switch'), { target: { value: true } });
    expect(handleChange).toBeCalled();
  });
});
