import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import { MdLink } from './MdLink';

const meta: Meta<typeof MdLink> = {
  title: 'mui/MdLink',
  component: MdLink,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdLink>;

const callback = () => {
  // DO NOTHING
};

export const Primary: Story = {
  args: {
    href: '#',
  },
};
Primary.parameters = {
  jest: ['MdLink.test'],
};
