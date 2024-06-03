import { render } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  test('Given Icon when its mount then ', () => {
    render(<Icon icon='delete' />);
    render(<Icon icon='delete' color='primary' />);
  });
});
