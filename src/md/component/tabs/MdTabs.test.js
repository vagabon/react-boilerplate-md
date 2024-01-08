import { fireEvent, render, screen } from '@testing-library/react';
import MdTabs from './MdTabs';

describe('MdTabs', () => {
  test('Given MdTabs when its mount then Tabs is shown', () => {
    const mockCallback = jest.fn();

    render(
      <MdTabs
        label='label'
        tabs={[
          { name: 'tab1', label: 'Tab1' },
          { name: 'tab2', label: 'Tab2' },
        ]}
        callback={mockCallback}>
        Content
      </MdTabs>,
    );

    expect(screen.getByTestId('Tabs')).toBeDefined();
    fireEvent.click(screen.getByTestId('Tabs'));
    expect(mockCallback).toBeCalled();
  });
});
