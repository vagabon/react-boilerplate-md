import { render, screen } from '@testing-library/react';
import { Translate } from './Translate';

describe('Translate', () => {
  test('Given Translate when its mount then Alert is shown', () => {
    render(<Translate i18nKey='title' />);
    expect(screen.getByTestId('Trans')).toBeDefined();
  });
});
