import { fireEvent, render, screen } from '@testing-library/react';
import { RouterProvider } from '../../../../router/provider/RouterProvider';
import { MdMenuItem } from './MdMenuItem';

jest.useFakeTimers();

test('renders learn react link', () => {
  render(
    <RouterProvider>
      <MdMenuItem name='name' url='url' childrens={[{ title: 'title', link: 'link' }]}>
        {' '}
      </MdMenuItem>
    </RouterProvider>,
  );

  expect(screen.getAllByRole('button')[0]).toBeDefined();
  fireEvent.click(screen.getByTestId('Menu'));
  jest.runAllTimers();
  fireEvent.click(screen.getByTestId('Button'));
  fireEvent.click(screen.getByTestId('MenuItem'));
  jest.runAllTimers();
  expect(mockNavigate).toBeCalled();
});
