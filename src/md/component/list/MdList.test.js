import { fireEvent, render, screen } from '@testing-library/react';
import MdList from './MdList';
import MdListItem from './MdListItem';
import MdListItemAvatar from './MdListItemAvatar';
import MdListItemButton from './MdListItemButton';
import MdListItemIcon from './MdListItemIcon';
import MdListItemText from './MdListItemText';

describe('MdList', () => {
  test('Given MdList when its mount then List is shown', () => {
    const mockCallback = jest.fn();
    const mockCallbackButton = jest.fn();
    render(
      <MdList callback={mockCallback}>
        <MdListItem callback={mockCallback}>
          <MdListItemAvatar>avatar</MdListItemAvatar>
          <MdListItemIcon>icon</MdListItemIcon>
          <MdListItemText label='label' />
        </MdListItem>
        <MdListItem component='li' disablePadding={true}></MdListItem>
        <MdListItemButton callback={mockCallbackButton}></MdListItemButton>
      </MdList>,
    );
    expect(screen.getByTestId('List')).toBeDefined();
    fireEvent.click(screen.getAllByTestId('ListItem')[0]);
    expect(mockCallback).toBeCalled();
    fireEvent.click(screen.getByTestId('ListItemButton'));
    expect(mockCallbackButton).toBeCalled();
  });
});
