import { render, screen } from '@testing-library/react';
import MdMarkdown from './MdMarkdown';

jest.useFakeTimers();

describe('MdMarkdown', () => {
  test('Given MdMarkdown When its mount Then MuiMarkdown is shown', () => {
    jest.spyOn(global, 'setInterval');

    const summaryCallback = jest.fn();
    render(
      <MdMarkdown content='content' summaryCallback={summaryCallback}>
        {' '}
      </MdMarkdown>,
    );
    jest.runAllTimers();
    expect(screen.getByTestId('MuiMarkdown')).toBeDefined();
  });
});
