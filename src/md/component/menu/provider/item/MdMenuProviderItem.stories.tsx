import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../../../stories/Helpers';

import { MdMenuProviderItem } from './MdMenuProviderItem';

const meta: Meta<typeof MdMenuProviderItem> = {
  title: 'mui/MdMenuProviderItem',
  component: MdMenuProviderItem,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdMenuProviderItem>;

export const Primary: Story = {
  args: {
    name: 'name',
    url: 'url',
    childrens: [{ title: 'title', link: 'link' }],
  },
};
Primary.parameters = {
  jest: ['MdMenuProviderItem.test'],
};
