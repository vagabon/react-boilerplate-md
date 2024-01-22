import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import MdCollapse from './MdCollapse';

const meta: Meta<typeof MdCollapse> = {
  title: 'mui/MdCollapse',
  component: MdCollapse,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdCollapse>;

export const Primary: Story = {
  args: {},
};
Primary.parameters = {
  jest: ['MdCollapse.test'],
};
