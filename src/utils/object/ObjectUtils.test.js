import { ObjectUtils } from './ObjectUtils';

describe('ObjectUtils', () => {
  test('Given ObjectUtils When getDtoValue Then return value', () => {
    const data = { name: 'value' };
    const tested = ObjectUtils.getDtoValue(data, 'name');
    expect(tested).toBe('value');
  });

  test('Given ObjectUtils When getDtoString Then return value', () => {
    const data = { name: 'value' };
    const tested = ObjectUtils.getDtoString(data, 'name');
    expect(tested).toBe('value');
  });

  test('Given ObjectUtils When compareId Then return true if same', () => {
    const tested = ObjectUtils.getRecursivValue({ user: { name: 'name' } }, 'user.name');
    expect(tested).toBe('name');
  });

  test('Given ObjectUtils When compareId Then return true if same', () => {
    const tested = ObjectUtils.compareId(1, 1);
    expect(tested).toBe(true);
  });

  test('Given ObjectUtils When compareId Then return true if same', () => {
    const tested = ObjectUtils.compareId(null, null);
    expect(tested).toBe(true);
  });

  test('Given ObjectUtils When addOrReplace on empty list Then return new list with one itm', () => {
    const tested = ObjectUtils.addOrReplace([], 'field', 'field2', 1, []);
    expect(tested.length).toBe(1);
  });

  test('Given ObjectUtils When addOrReplace Then return true if same', () => {
    const tested = ObjectUtils.addOrReplace(
      [
        { id: 1, field: 'test' },
        { id: 2, field: 'tested' },
      ],
      'id',
      'field2',
      { id: 1, field2: [{ id: 1, field: 'test2' }] },
    );
    expect(tested.length).toBe(2);
  });

  test('Given ObjectUtils When toLowerCase Then toLowerCase', () => {
    const tested = ObjectUtils.toLowerCase('FIELD');
    expect(tested).toBe('field');
  });

  test('Given ObjectUtils When toUpperCase Then toUpperCase', () => {
    const tested = ObjectUtils.toUpperCase('field');
    expect(tested).toBe('FIELD');
  });

  test('Given ObjectUtils When toUpperCase Then toNumberFormat', () => {
    const tested = ObjectUtils.toNumberFormat('1000000');
    expect(tested).toBe('1 000 000');
  });

  test('Given ObjectUtils When toNumberShot Then toNumberShot', () => {
    let tested = ObjectUtils.toNumberShot(123);
    expect(tested).toBe('123');

    tested = ObjectUtils.toNumberShot(1234);
    expect(tested).toBe('1K23');

    tested = ObjectUtils.toNumberShot(12345);
    expect(tested).toBe('12K35');

    tested = ObjectUtils.toNumberShot(123456);
    expect(tested).toBe('123K');

    tested = ObjectUtils.toNumberShot(1234567);
    expect(tested).toBe('1,23M');

    tested = ObjectUtils.toNumberShot(12345678);
    expect(tested).toBe('12,35M');

    tested = ObjectUtils.toNumberShot(123456789);
    expect(tested).toBe('123,46M');

    tested = ObjectUtils.toNumberShot(1234567890);
    expect(tested).toBe('1,23MM');

    tested = ObjectUtils.toNumberShot(12345678900);
    expect(tested).toBe('12,35MM');

    tested = ObjectUtils.toNumberShot(123456789000);
    expect(tested).toBe('123,46MM');
  });
});
