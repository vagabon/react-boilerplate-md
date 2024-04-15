import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import MdMenu from './MdMenu';

const meta: Meta<typeof MdMenu> = {
  title: 'mui/MdMenu',
  component: MdMenu,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdMenu>;

export const Primary: Story = {
  args: {
    title: <>Dashboard</>,
    elements: [{ name: 'test', element: <>test</> }],
  },
};
Primary.parameters = {
  jest: ['MdMenu.test'],
};
