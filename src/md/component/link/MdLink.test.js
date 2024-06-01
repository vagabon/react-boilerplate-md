import { fireEvent, render, screen } from '@testing-library/react';
import { RouterProvider } from '../../../router/provider/RouterProvider';
import { MdLink } from './MdLink';

describe('MdLink', () => {
  test('Given MdLink when its mount then Link is shown', () => {
    render(
      <RouterProvider>
        <MdLink href='url' label='label' />
      </RouterProvider>,
    );

    expect(screen.queryAllByTestId('Link').length).toBe(1);
    expect(screen.getByTestId('Link')).toBeDefined();
    fireEvent.click(screen.getByTestId('Link'));
    expect(mockNavigate).toBeCalledWith('url');
  });

  test('Given MdLink when its mount then Link is shown', () => {
    render(
      <RouterProvider>
        <MdLink href='https://google.com' label='label' />
      </RouterProvider>,
    );

    expect(screen.queryAllByTestId('Link').length).toBe(1);
    expect(screen.getByTestId('Link')).toBeDefined();
    fireEvent.click(screen.getByTestId('Link'));
    expect(mockNavigate).not.toBeCalled();
  });

  test('Given MdLink when its mount without href then Link is not shown', () => {
    render(
      <RouterProvider>
        <MdLink label='label' color='secondary' />
      </RouterProvider>,
    );

    expect(screen.queryAllByTestId('Link').length).toBe(0);
  });
});
