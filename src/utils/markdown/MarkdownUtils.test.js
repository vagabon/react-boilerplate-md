import { emptyCopyButton } from './MarkdownUtils';

describe('MarkdownUtils', () => {
  test('Given MarkdownUtils When getDtoValue Then return value', () => {
    let tested = emptyCopyButton('CODE', 'copyHtml', [{}], [{}]);
    expect(tested).toBe(false);

    tested = emptyCopyButton('CODE', 'copyHtml', [], []);
    expect(tested).toBe(true);

    tested = emptyCopyButton('code', 'copyHtml', [], []);
    expect(tested).toBe(true);

    tested = emptyCopyButton('PRE', 'copyHtml', [], []);
    expect(tested).toBe(true);

    tested = emptyCopyButton('pre', 'copyHtml', [], []);
    expect(tested).toBe(true);
  });
});
