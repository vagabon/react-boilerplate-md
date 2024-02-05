import { render, screen } from '@testing-library/react';
import MdTreeView from './MdTreeView';

describe('MdTreeView', () => {
  test('Given MdTreeView when its mount then Toolbar is shown', () => {
    const tree = [
      {
        id: 1,
        label: 'Node 1',
        childrens: [
          { id: 2, label: 'Node 2', childrens: [{ id: 5, label: 'Node 5', childrens: [] }] },
          {
            id: 3,
            label: 'Node 3',
            childrens: [
              {
                id: 6,
                label: 'Node 6',
                childrens: [
                  { id: 7, label: 'Node 7', childrens: [] },
                  { id: 8, label: 'Node 8', childrens: [] },
                ],
              },
            ],
          },
          { id: 4, label: 'Node 4', childrens: [] },
        ],
      },
    ];
    render(<MdTreeView tree={tree}></MdTreeView>);
    expect(screen.getByTestId('ExpandMoreIcon')).toBeDefined();
  });
});
