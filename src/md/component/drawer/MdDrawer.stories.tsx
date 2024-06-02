import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import { MdDrawer } from './MdDrawer';

const meta: Meta<typeof MdDrawer> = {
  title: 'mui/MdDrawer',
  component: MdDrawer,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdDrawer>;

export const Primary: Story = {
  args: {
    open: true,
  },
};
Primary.parameters = {
  jest: ['MdDrawer.test'],
};
