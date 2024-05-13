import { fireEvent, render, screen } from '@testing-library/react';
import { MdFormFile } from './MdFormFile';

describe('MdFormFile', () => {
  test('Given MdFormFile when its mount then Checkbox is shown', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <MdFormFile label='label' name='name' values={{ name: 'name' }} handleChangeFile={handleChange} />,
    );
    expect(screen.getByTestId('Box')).toBeDefined();
    const fileContents = 'file contents';
    const file = new Blob([fileContents], { type: 'text/plain' });
    fireEvent.change(container.querySelector(`input[name="name"]`), {
      target: { target: { files: [file] } },
    });
    expect(handleChange).toBeCalled();
  });
});
