import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../../stories/Helpers';

import { MdCircularProgress } from './MdCircularProgress';

const meta: Meta<typeof MdCircularProgress> = {
  title: 'mui/progress/MdCircularProgress',
  component: MdCircularProgress,
  tags: ['mui/progress'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdCircularProgress>;

export const Primary: Story = {
  args: {},
};
Primary.parameters = {
  jest: ['MdCircularProgress.test'],
};
