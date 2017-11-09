/**
 * Increase or disable jest tests timeout
 * Timeout value should not be 0
 * Default is 30s
 */
jest.setTimeout(process.env.TIMEOUT || 30000);
