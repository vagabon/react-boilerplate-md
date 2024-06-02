import { fireEvent, render, screen } from '@testing-library/react';
import { useClickOutside } from './useClickOutside';

const ReactOutside = ({ callback }) => {
  const { ref } = useClickOutside(true, callback, 'class');
  return (
    <>
      <div ref={ref}>Value</div>
      <div data-testid='test'>test</div>
      <div className='class'>
        <div data-testid='test2'>test</div>
      </div>
    </>
  );
};

describe('useClickOutside', () => {
  test('Given useClickOutside when is mount Then ', () => {
    const callback = jest.fn();
    render(<ReactOutside callback={callback} />);
    fireEvent.mouseDown(screen.getByTestId('test'));
    expect(callback).toHaveBeenCalledTimes(1);
    jest.resetAllMocks();
    fireEvent.mouseDown(screen.getByTestId('test2'));
    expect(callback).not.toBeCalled();
  });
});
