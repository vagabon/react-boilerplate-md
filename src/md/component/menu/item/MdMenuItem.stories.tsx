import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../../stories/Helpers';

import { MdMenuItem } from './MdMenuItem';

const meta: Meta<typeof MdMenuItem> = {
  title: 'mui/MdMenuItem',
  component: MdMenuItem,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdMenuItem>;

export const Primary: Story = {
  args: {},
};
Primary.parameters = {
  jest: ['MdMenuItem.test'],
};
