import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import { MdTreeView } from './MdTreeView';

const meta: Meta<typeof MdTreeView> = {
  title: 'mui/MdTreeView',
  component: MdTreeView,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdTreeView>;

const callback = (id: number) => {
  console.debug(id);
};

export const Primary: Story = {
  args: {
    tree: [
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
    ],
    callback,
  },
};
Primary.parameters = {
  jest: ['MdTreeView.test'],
};
