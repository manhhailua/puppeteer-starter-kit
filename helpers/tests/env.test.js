import env from '../env';

describe('ENV helpers', () => {
  describe('.checkEnvironmentVariables()', () => {
    test('should throw custom error if ROOT_HREF is not defined', () => {
      const mockingThrowingError = jest.fn(() => {
        env.checkEnvironmentVariables('');
      });

      expect(mockingThrowingError).toThrowError(env.ERROR_ROOT_HREF_IS_NOT_DEFINED);
    });

    test('should not throw any error if ROOT_HREF is defined', () => {
      const mockingThrowingError = jest.fn(() => {
        env.checkEnvironmentVariables('https://google.com/');
      });

      expect(mockingThrowingError).not.toThrowError();
    });
  });
});