import { render, screen } from '@testing-library/react';
import { MdMarkdown } from './MdMarkdown';

jest.useFakeTimers();

String.prototype.replaceAll = function (match, replace) {
  return this;
};

describe('MdMarkdown', () => {
  test('Given MdMarkdown When its mount Then MuiMarkdown is shown', () => {
    jest.spyOn(global, 'setInterval');

    const summaryCallback = jest.fn();
    render(
      <MdMarkdown
        content={
          <div>
            <h1>H1</h1>
            <h2>H2</h2>
          </div>
        }
        summaryCallback={summaryCallback}
      />,
    );
    jest.runAllTimers();
    expect(screen.getByTestId('MuiMarkdown')).toBeDefined();
  });
});
