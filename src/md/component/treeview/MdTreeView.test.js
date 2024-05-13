import { fireEvent, render, screen } from '@testing-library/react';
import { MdTreeView } from './MdTreeView';

describe('MdTreeView', () => {
  test('Given MdTreeView when its mount then Toolbar is shown', () => {
    const tree = [
      {
        id: 1,
        label: 'Node 1',
        childrens: [{ id: 2, label: 'Node 2', childrens: [{ id: 5, label: 'Node 5', childrens: [] }] }],
      },
    ];
    const mockCallback = jest.fn();
    render(<MdTreeView tree={tree} callback={mockCallback}></MdTreeView>);
    expect(screen.getByRole('treeitem')).toBeDefined();
    fireEvent.click(screen.getByRole('treeitem'));
  });
});
