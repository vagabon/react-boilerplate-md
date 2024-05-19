import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../../stories/Helpers';

import { MdLinearProgress } from './MdLinearProgress';

const meta: Meta<typeof MdLinearProgress> = {
  title: 'mui/progress/MdLinearProgress',
  component: MdLinearProgress,
  tags: ['mui/progress'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdLinearProgress>;

export const Primary: Story = {
  args: {},
};
Primary.parameters = {
  jest: ['MdLinearProgress.test'],
};
