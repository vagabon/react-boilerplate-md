import { render } from '@testing-library/react';
import { MdMenuProvider } from './MdMenuProvider';

jest.useFakeTimers();

test('given MdMenuProvider when mount then', () => {
  render(<MdMenuProvider title={<>test</>} elements={[{ name: 'test', element: () => <div>test</div> }]} />);
});
