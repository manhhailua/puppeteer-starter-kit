import env from '../env';

describe('env helpers', () => {
  describe('checkEnvironmentVariables', () => {
    test('should throw custom error if ROOT_HREF is not defined', () => {
      function mockingFunction() {
        env.checkEnvironmentVariables(null);
      }

      expect(mockingFunction).toThrowError(env.ERROR_ROOT_HREF_IS_NOT_DEFINED);
    });

    test('should not throw any error if ROOT_HREF is defined', () => {
      function mockingFunction() {
        env.checkEnvironmentVariables('https://google.com/');
      }

      expect(mockingFunction).not.toThrowError();
    });
  });
});