import { fireEvent, render, screen } from '@testing-library/react';
import { MdLink } from './MdLink';

describe('MdLink', () => {
  test('Given MdLink when its mount then Link is shown', () => {
    render(<MdLink href='url' label='label' />);

    expect(screen.queryAllByTestId('Link').length).toBe(1);
    expect(screen.getByTestId('Link')).toBeDefined();
    fireEvent.click(screen.getByTestId('Link'));
    expect(mockNavigate).toBeCalledWith('url');
  });

  test('Given MdLink when its mount then Link is shown', () => {
    render(<MdLink href='https://google.com' label='label' />);

    expect(screen.queryAllByTestId('Link').length).toBe(1);
    expect(screen.getByTestId('Link')).toBeDefined();
    fireEvent.click(screen.getByTestId('Link'));
    expect(mockNavigate).not.toBeCalled();
  });

  test('Given MdLink when its mount without href then Link is not shown', () => {
    render(<MdLink label='label' color='secondary' />);

    expect(screen.queryAllByTestId('Link').length).toBe(0);
  });
});
