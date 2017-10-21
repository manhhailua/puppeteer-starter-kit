export const DEFAULT_UNDEFINED_VARIABLE_ERRORS = {
  ROOT_HREF: 'ROOT_HREF is not defined. Example: "https://github.com/"',
};

export function verifyEnvironmentVariables(
  env = process.env,
  errors = {},
) {
  // Assign default errors before custom errors
  const undefinedErrors = { ...DEFAULT_UNDEFINED_VARIABLE_ERRORS, ...errors };

  // Loop through all the ENV variable name then check if it is defined
  for (let variableName in undefinedErrors) {
    if (typeof env[variableName] === 'undefined') {
      throw new ReferenceError(undefinedErrors[variableName]);
    }
  }
}

export default {
  DEFAULT_UNDEFINED_VARIABLE_ERRORS,
  verifyEnvironmentVariables,
};