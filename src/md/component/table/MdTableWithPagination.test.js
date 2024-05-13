import { fireEvent, render, screen } from '@testing-library/react';
import { MdTableWithPagination } from './MdTableWithPagination';

describe('MdTableWithPagination', () => {
  test('Given MdTableWithPagination when its mount then Table is shown', () => {
    const callBack = jest.fn();
    render(
      <MdTableWithPagination
        url='url'
        cells={[
          { name: 'name', label: 'label', order: true },
          { name: 'user.name', label: 'label', order: true },
          { name: 'profile.id', label: 'label', order: true },
        ]}
        datas={[{ id: 1, name: 'name', user: { name: 'username' }, profile: [{ id: 1 }] }]}
        count={10}
        page={0}
        rowsPerPage={5}
        sortBy='name'
        sortByOrder='asc'
        callBack={callBack}>
        Content
      </MdTableWithPagination>,
    );
    expect(screen.getByTestId('Table')).toBeDefined();

    fireEvent.click(screen.getAllByTestId('TableSortLabel')[0]);
    expect(callBack).toBeCalled();

    fireEvent.click(screen.getAllByTestId('TableRow')[1]);
    expect(mockNavigate).toBeCalled();

    fireEvent.click(screen.getByTestId('TablePagination'));
    expect(callBack).toBeCalled();

    fireEvent.blur(screen.getByTestId('TablePagination'));
    expect(callBack).toBeCalled();
  });
});
