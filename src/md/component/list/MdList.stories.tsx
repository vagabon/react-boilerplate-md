import type { Meta, StoryObj } from '@storybook/react';
import { withProvider, withTest } from '../../../stories/Helpers';

import MdList from './MdList';
import MdListItem from './MdListItem';
import MdListItemAvatar from './MdListItemAvatar';
import MdListItemButton from './MdListItemButton';
import MdListItemIcon from './MdListItemIcon';
import MdListItemText from './MdListItemText';

const meta: Meta<typeof MdList> = {
  title: 'mui/MdList',
  component: MdList,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdList>;

const callback = () => {
  // DO NOTHING
};

export const Primary: Story = {
  args: {
    children: (
      <>
        <MdListItem callback={callback}>
          <MdListItemAvatar>avatar</MdListItemAvatar>
          <MdListItemIcon>icon</MdListItemIcon>
          <MdListItemText label='label' />
        </MdListItem>
        <MdListItem component='li' disablePadding={true}>
          <MdListItemText label='label2' />
        </MdListItem>
        <MdListItemButton callback={callback}>
          <MdListItemText label='label3' />
        </MdListItemButton>
      </>
    ),
  },
};
Primary.parameters = {
  jest: ['MdList.test'],
};
