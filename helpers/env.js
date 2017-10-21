export const ERROR_ROOT_HREF_IS_NOT_DEFINED = new ReferenceError('ROOT_HREF is not defined. Example: https://google.com/');

export function checkEnvironmentVariables(
  ROOT_HREF = process.env.ROOT_HREF,
  error = ERROR_ROOT_HREF_IS_NOT_DEFINED,
) {
  if (!ROOT_HREF) {
    throw error;
  }
}

export default {
  ERROR_ROOT_HREF_IS_NOT_DEFINED,
  checkEnvironmentVariables,
};