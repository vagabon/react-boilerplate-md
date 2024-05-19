import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import { MdSkeleton } from './MdSkeleton';

const meta: Meta<typeof MdSkeleton> = {
  title: 'mui/MdSkeleton',
  component: MdSkeleton,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdSkeleton>;

export const Primary: Story = {
  args: { width: '100%' },
};
Primary.parameters = {
  jest: ['MdSkeleton.test'],
};
