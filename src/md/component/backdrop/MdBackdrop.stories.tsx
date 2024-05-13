import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import { MdBackdrop } from './MdBackdrop';

const meta: Meta<typeof MdBackdrop> = {
  title: 'mui/MdBackdrop',
  component: MdBackdrop,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdBackdrop>;

export const Primary: Story = {
  args: { open: true },
};
Primary.parameters = {
  jest: ['MdBackdrop.test'],
};
