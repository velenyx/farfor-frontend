import { classNames } from './classNames';

describe('classNames', () => {
  test('with only one param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(
      classNames(
        'someClass',
        {
          hovered: true,
          scrollable: true
        },
        ['class1', 'class2']
      )
    ).toBe(expected);
  });

  test('with mode false', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames(
        'someClass',
        {
          hovered: true,
          scrollable: false
        },
        ['class1', 'class2']
      )
    ).toBe(expected);
  });

  test('with mode undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames(
        'someClass',
        {
          hovered: true,
          scrollable: undefined
        },
        ['class1', 'class2']
      )
    ).toBe(expected);
  });

  test('should return the correct class names with mods and additional classes', () => {
    const cls = 'my-class';
    const mods = {
      modifier1: true,
      modifier2: false,
      modifier3: 'active',
      modifier4: undefined
    };
    const additional = ['extra-class', undefined, 'another-class'];
    const result = classNames(cls, mods, additional);
    expect(result).toBe('my-class extra-class another-class modifier1 modifier3');
  });
  test('should return the correct class names with empty mods and additional classes', () => {
    const cls = 'my-class';
    const result = classNames(cls);
    expect(result).toBe('my-class');
  });
  test('should return the correct class names with empty cls and mods', () => {
    const mods = {
      modifier1: true,
      modifier2: false,
      modifier3: 'active',
      modifier4: undefined
    };
    const result = classNames('', mods);
    expect(result).toBe(' modifier1 modifier3');
  });
  test('should return an empty string with empty cls, mods, and additional classes', () => {
    const result = classNames('', {}, []);
    expect(result).toBe('');
  });
});
