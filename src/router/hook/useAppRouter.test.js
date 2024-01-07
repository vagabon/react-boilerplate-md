import { render } from '@testing-library/react';
import { useAppRouter } from './useAppRouter';

describe('useAppRouter', () => {
  test('Given useAppRouter When its mmount Then ', () => {
    const ReactTested = () => {
      useAppRouter();
      return <></>;
    };
    render(<ReactTested />);
  });
});
