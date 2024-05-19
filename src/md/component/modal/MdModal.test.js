import { fireEvent, render, screen } from '@testing-library/react';
import { MdModal } from './MdModal';

describe('MdModal', () => {
  test('Given MdModal When its mount Then Modal is shown', () => {
    const mockhandleClose = jest.fn();
    render(<MdModal handleClose={mockhandleClose}></MdModal>);
    expect(screen.getByTestId('Modal')).toBeDefined();
    fireEvent.click(screen.getByTestId('ModalClick'));
    fireEvent.click(screen.getByTestId('ModalClose'));
    expect(mockhandleClose).toBeCalled();
  });
});
