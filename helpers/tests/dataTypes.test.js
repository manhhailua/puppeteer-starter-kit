import { toBoolean } from '../dataTypes';

describe('dataTypes helpers', () => {
  describe('.toBoolean()', () => {
    test('should return Boolean(true) from param String("true")', () => {
      const result = toBoolean('true');
      expect(result).toBe(true);
    });

    test('should return Boolean(true) from param Boolean(true)', () => {
      const result = toBoolean(true);
      expect(result).toBe(true);
    });

    test('should return Boolean(false) from param that is not String("true")', () => {
      const result = toBoolean('not true');
      expect(result).toBe(false);
    });

    test('should return Boolean(false) from param String("false")', () => {
      const result = toBoolean('false');
      expect(result).toBe(false);
    });

    test('should return Boolean(false) from param Boolean(false)', () => {
      const result = toBoolean(false);
      expect(result).toBe(false);
    });
  });
});