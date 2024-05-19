import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import { IconClickable } from '../../../icon/component/IconClickable';
import { MdTooltip } from './MdTooltip';

const meta: Meta<typeof MdTooltip> = {
  title: 'mui/MdTooltip',
  component: MdTooltip,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdTooltip>;

export const Primary: Story = {
  args: { title: 'Delete', children: <IconClickable icon='delete' /> },
};
Primary.parameters = {
  jest: ['MdTooltip.test'],
};
