import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import { MdSnackbar } from './MdSnackbar';

const meta: Meta<typeof MdSnackbar> = {
  title: 'mui/MdSnackbar',
  component: MdSnackbar,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdSnackbar>;

export const Primary: Story = {
  args: {
    message: 'message',
    type: 'info',
  },
};
Primary.parameters = {
  jest: ['MdSnackbar.test'],
};
