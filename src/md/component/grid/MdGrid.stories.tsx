import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import { MdGrid } from './MdGrid';

const meta: Meta<typeof MdGrid> = {
  title: 'mui/MdGrid',
  component: MdGrid,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdGrid>;

const callback = () => {
  // DO NOTHING
};

export const Primary: Story = {
  args: {
    container: true,
    xs: false,
    item: true,
    style: {},
    children: <>texte</>,
  },
};
Primary.parameters = {
  jest: ['MdGrid.test'],
};
