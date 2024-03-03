import { DateUtils } from './DateUtils';

describe('DateUtils - format', () => {
  test('Given DateUtils When format width a empty date Then the return is weird', () => {
    let tested = DateUtils.format('', 'YYYY/MM/DD');
    expect(tested).toBe('');

    tested = DateUtils.format(undefined, 'YYYY/MM/DD');
    expect(tested).toBe('');
  });

  test('Given DateUtils When format width a good date Then the date is format correctly', () => {
    const tested = DateUtils.format('2023-03-30T14:14:30.347175Z', 'DD/MM/YYYY hh:mm:ss');
    expect(tested).toBe('30/03/2023 14:14:30');
  });

  test('Given DateUtils When showEndDate Then the date is show', () => {
    const tested = DateUtils.showEndDate('2025-03-30T14:14:30.347175Z');
    expect(tested).not.toBe('');
  });

  test('Given DateUtils When isDateSupNow Then the date is show', () => {
    const tested = DateUtils.isDateSupNow('2025-03-30T14:14:30.347175Z');
    expect(tested).toBe(true);
  });
});
