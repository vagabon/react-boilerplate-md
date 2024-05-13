import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../../stories/Helpers';

import { MdInputDatepicker } from './MdInputDatepicker';

const meta: Meta<typeof MdInputDatepicker> = {
  title: 'mui/MdInputDatepicker',
  component: MdInputDatepicker,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdInputDatepicker>;

const callBack = () => {
  // DO NOTHING
};

export const Primary: Story = {
  args: {
    className: 'classname',
    label: 'label',
    name: 'date',
    state: { date: '2024-01-01T20:30:00' },
    handleChange: callBack,
  },
};
Primary.parameters = {
  jest: ['MdInputDatepicker.test'],
};
