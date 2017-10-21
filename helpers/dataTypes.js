export function toBoolean(string = '') {
  if (string === true) {
    return true;
  }

  if (typeof string !== 'string') {
    return false;
  }

  return string.toLowerCase() === 'true';
}

export default {
  toBoolean,
};
