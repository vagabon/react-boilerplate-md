import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../../stories/Helpers';
import { MdMenuProvider } from './MdMenuProvider';

const meta: Meta<typeof MdMenuProvider> = {
  title: 'mui/MdMenuProvider',
  component: MdMenuProvider,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdMenuProvider>;

export const Primary: Story = {
  args: {
    title: <>Dashboard</>,
    elements: [{ name: 'test', element: () => <>test</> }],
  },
};
Primary.parameters = {
  jest: ['MdMenuProvider.test'],
};
