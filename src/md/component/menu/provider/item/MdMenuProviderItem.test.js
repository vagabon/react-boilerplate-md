import { fireEvent, render, screen } from '@testing-library/react';
import { RouterProvider } from '../../../../../router/provider/RouterProvider';
import { MdMenuProviderItem } from './MdMenuProviderItem';

jest.useFakeTimers();

test('renders learn react link', () => {
  render(
    <RouterProvider>
      <MdMenuProviderItem name='name' url='url' childrens={[{ title: 'title', link: 'link' }]}>
        {' '}
      </MdMenuProviderItem>
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
