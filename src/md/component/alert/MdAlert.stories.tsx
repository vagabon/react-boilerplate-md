import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import { MdAlert } from './MdAlert';

const meta: Meta<typeof MdAlert> = {
  title: 'mui/MdAlert',
  component: MdAlert,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdAlert>;

export const Primary: Story = {
  args: { label: 'label' },
};
Primary.parameters = {
  jest: ['MdAlert.test'],
};
