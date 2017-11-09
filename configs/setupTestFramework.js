/**
 * Increase or disable jest tests timeout
 * Timeout value should not be 0
 * Default is 5s
 */
jest.setTimeout(process.env.TIMEOUT || 5000);
