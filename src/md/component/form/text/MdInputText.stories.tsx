import type { Meta, StoryObj } from '@storybook/react';

import { withProvider, withTest } from '../../../../stories/Helpers';
import { MdInputText } from './MdInputText';

const meta: Meta<typeof MdInputText> = {
  title: 'mui/MdInputText',
  component: MdInputText,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdInputText>;

const callback = () => {
  // DO NOTHING
};

export const Primary: Story = {
  args: {},
};
Primary.parameters = {
  jest: ['MdInputText.test'],
};
