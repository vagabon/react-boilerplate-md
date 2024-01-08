import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../../stories/Helpers';

import MdFormFile from './MdFormFile';

const meta: Meta<typeof MdFormFile> = {
  title: 'mui/MdFormFile',
  component: MdFormFile,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdFormFile>;

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
    handleChangeFile: handleChange,
  },
};
Primary.parameters = {
  jest: ['MdFormFile.test'],
};
