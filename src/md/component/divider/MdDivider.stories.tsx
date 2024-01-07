import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import MdDivider from './MdDivider';

const meta: Meta<typeof MdDivider> = {
  title: 'mui/MdDivider',
  component: MdDivider,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdDivider>;

export const Primary: Story = {
  args: {},
};
Primary.parameters = {
  jest: ['MdDivider.test'],
};
