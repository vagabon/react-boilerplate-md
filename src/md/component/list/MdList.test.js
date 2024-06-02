import { render, screen } from '@testing-library/react';
import { MdList } from './MdList';
import { MdListItem } from './MdListItem';
import { MdListItemAvatar } from './MdListItemAvatar';
import { MdListItemButton } from './MdListItemButton';
import { MdListItemIcon } from './MdListItemIcon';
import { MdListItemText } from './MdListItemText';

describe('MdList', () => {
  test('Given MdList when its mount then List is shown', () => {
    const mockCallback = jest.fn();

    render(
      <MdList callback={mockCallback}>
        <MdListItem>
          <MdListItemAvatar>avatar</MdListItemAvatar>
          <MdListItemIcon>icon</MdListItemIcon>
          <MdListItemText label='label' />
        </MdListItem>
        <MdListItem component='li' disablePadding={true}></MdListItem>
        <MdListItemButton></MdListItemButton>
      </MdList>,
    );
    expect(screen.getByTestId('List')).toBeDefined();
  });
});
