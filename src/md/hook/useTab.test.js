import { renderHook, waitFor } from '@testing-library/react';
import { useTab } from './useTab';

describe('useTab', () => {
  test('Given useTab when is mount Then ', () => {
    const { result } = renderHook(() => useTab([{ name: 'name', label: 'label' }]));

    waitFor(() => {
      result.current.updateTab(jest.fn());
      result.current.handleChangeTab('url')('value');
    });
  });
});
