import { render } from '@testing-library/react';
import { MdMenu } from './MdMenu';

jest.useFakeTimers();

test('given MdMenu when mount then', () => {
  render(<MdMenu title={<>test</>} elements={[{ name: 'test', element: () => <div>test</div> }]} />);
});
