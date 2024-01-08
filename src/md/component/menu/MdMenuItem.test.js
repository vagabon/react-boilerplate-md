import { fireEvent, render, screen } from '@testing-library/react';
import MdMenuItem from './MdMenuItem';

jest.useFakeTimers();

test('renders learn react link', () => {
  render(
    <MdMenuItem name='name' url='url' childrens={[{ title: 'title', link: 'link' }]}>
      {' '}
    </MdMenuItem>,
  );

  expect(screen.getAllByRole('button')[0]).toBeDefined();
  fireEvent.click(screen.getByTestId('Menu'));
  jest.runAllTimers();
  fireEvent.click(screen.getByTestId('Button'));
  fireEvent.click(screen.getByTestId('MenuItem'));
  jest.runAllTimers();
  expect(mockNavigate).toBeCalled();
});
