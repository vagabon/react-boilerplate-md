import { fireEvent, render, screen } from '@testing-library/react';
import MdSearchBar from './MdSearchBar';

jest.useFakeTimers();

test('renders learn react link', () => {
  const mockCallback = jest.fn();

  render(<MdSearchBar search='plouf' callBack={mockCallback} />);

  expect(screen.getByRole('textbox')).toBeDefined();
  fireEvent.change(screen.getByTestId('TextField'), { target: { value: { test: 'test' } } });
  jest.runAllTimers();
  expect(mockCallback).toBeCalled();
});
