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
    expect(tested).toBe(false);
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
});
