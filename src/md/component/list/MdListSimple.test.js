import { render, screen } from '@testing-library/react';
import { MdListSimple } from './MdListSimple';

describe('MdListSimple', () => {
  test('Given MdListSimple when its mount then List is shown', () => {
    render(<MdListSimple title='title' items={[{ label: 'label' }]} />);
    expect(screen.getByRole('list')).toBeDefined();
  });
});
