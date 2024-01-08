import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../../stories/Helpers';

import MdFormSwitch from './MdFormSwitch';

const meta: Meta<typeof MdFormSwitch> = {
  title: 'mui/MdFormSwitch',
  component: MdFormSwitch,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdFormSwitch>;

let checked = true;
let values = { name: checked };

const handleChange = () => {
  checked = !checked;
  values = { name: checked };
};

export const Primary: Story = {
  args: {
    label: 'label',
    name: 'name',
    values: values,
    errors: [],
    handleChange: handleChange,
  },
};
Primary.parameters = {
  jest: ['MdFormSwitch.test'],
};
