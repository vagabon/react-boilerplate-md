import type { Meta, StoryObj } from '@storybook/react';

import { Menu as MenuIcon } from '@mui/icons-material';
import { Button, IconButton, Toolbar, Typography } from '@mui/material';
import { withProvider, withTest } from '../../../stories/Helpers';
import { MdAppBar } from './MdAppBar';

const meta: Meta<typeof MdAppBar> = {
  title: 'mui/MdAppBar',
  component: MdAppBar,
  tags: ['mui'],
  argTypes: {},
  decorators: [withTest, withProvider],
};

export default meta;
type Story = StoryObj<typeof MdAppBar>;

export const Primary: Story = {
  args: {
    children: (
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    ),
  },
};
Primary.parameters = {
  jest: ['MdAppBar.test'],
};
