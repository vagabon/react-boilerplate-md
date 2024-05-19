import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import { MdCard } from './MdCard';

const meta: Meta<typeof MdCard> = {
  title: 'mui/MdCard',
  component: MdCard,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdCard>;

export const Primary: Story = {
  args: {
    title: 'title',
    date: '2023-11-11T12:31:20',
    urlUpdate: 'urlUpdate',
    avatar: 'avatar',
    image:
      'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    className: 'classNamme',
    children: 'Description',
  },
};
Primary.parameters = {
  jest: ['MdCard.test'],
};
