import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import MdAccordion from './MdAccordion';

const meta: Meta<typeof MdAccordion> = {
  title: 'mui/MdAccordion',
  component: MdAccordion,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdAccordion>;

export const Primary: Story = {
  args: { title: 'title', description: 'description', expanded: true },
};
Primary.parameters = {
  jest: ['MdAccordion.test'],
};
