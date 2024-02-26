import { fireEvent, render, screen } from '@testing-library/react';
import MdCard from './MdCard';

describe('MdCard', () => {
  test('Given MdCard when its mount then ButtonGroup is shown', () => {
    render(
      <MdCard
        id={1}
        icon='icon'
        title='title'
        date='date'
        url='url'
        urlUpdate='urlUpdate'
        avatar='avatar'
        image='image'
        className='className'
        buttonchildren={<></>}
        callbackLeft={() => {}}></MdCard>,
    );
    expect(screen.getByTestId('Card')).toBeDefined();
    fireEvent.click(screen.getByTestId('CardHeader'));
    expect(mockNavigate).toBeCalled();
  });
});
