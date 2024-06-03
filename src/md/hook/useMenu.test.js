import { renderHook, waitFor } from '@testing-library/react';
import { useMenu } from './useMenu';

describe('useMenu', () => {
  test('Given useMenu when is mount Then ', () => {
    const { result } = renderHook(() => useMenu([{ name: 'name', label: 'label' }]));

    waitFor(() => {
      result.current.handleClick({ currentTarget: <></> });
      result.current.handleClose();
    });
  });
});
