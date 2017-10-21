import env from '../env';

describe('ENV helpers', () => {
  describe('.verifyEnvironmentVariables()', () => {
    test('should not throw any error if ROOT_HREF is defined', () => {
      const mockingThrowingError = jest.fn(() => {
        env.verifyEnvironmentVariables({
          ROOT_HREF: 'https://github.com/',
        });
      });

      expect(mockingThrowingError).not.toThrowError();
    });

    test('should throw an error if ROOT_HREF is not defined', () => {
      const mockingThrowingError = jest.fn(() => {
        env.verifyEnvironmentVariables({
          ROOT_HREF: undefined,
        });
      });

      expect(mockingThrowingError).toThrowError(env.DEFAULT_UNDEFINED_VARIABLE_ERRORS.ROOT_HREF);
    });

    test('should throw an custom error for a global variable', () => {
      const customErrorMessage = 'CUSTOM_ENV_VAR is not defined.';
      const mockingThrowingError = jest.fn(() => {
        env.verifyEnvironmentVariables({
          ROOT_HREF: 'is defined',
          CUSTOM_ENV_VAR: undefined,
        }, {
          CUSTOM_ENV_VAR: customErrorMessage,
        });
      });

      expect(mockingThrowingError).toThrowError(customErrorMessage);
    });
  });
});