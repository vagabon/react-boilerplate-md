import { render, screen } from '@testing-library/react';
import { MdAlert } from './MdAlert';

describe('MdAlert', () => {
  test('Given MdAlert when its mount then Alert is shown', () => {
    render(<MdAlert title='title' label='label' />);
    expect(screen.getByTestId('Alert')).toBeDefined();
  });
});
