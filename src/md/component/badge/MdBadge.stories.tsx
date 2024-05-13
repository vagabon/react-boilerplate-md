import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import { MdBadge } from './MdBadge';

const meta: Meta<typeof MdBadge> = {
  title: 'mui/MdBadge',
  component: MdBadge,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdBadge>;

export const Primary: Story = {
  args: { showZero: true, content: 0, icon: 'settings', title: 'Settings' },
};
Primary.parameters = {
  jest: ['MdBadge.test'],
};
