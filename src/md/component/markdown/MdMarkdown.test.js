import { render, screen } from '@testing-library/react';
import MdMarkdown from './MdMarkdown';

jest.useFakeTimers();

describe('MdMarkdown', () => {
  test('Given MdMarkdown When its mount Then MuiMarkdown is shown', () => {
    jest.spyOn(global, 'setInterval');

    const summaryCallback = jest.fn();
    render(
      <MdMarkdown
        content={
          <div>
            <h3>H3</h3>
            <h4>H4</h4>
          </div>
        }
        summaryCallback={summaryCallback}
      />,
    );
    jest.runAllTimers();
    expect(screen.getByTestId('MuiMarkdown')).toBeDefined();
  });
});
