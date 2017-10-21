export const ROOT_HREF = process.env.ROOT_HREF;

export const PLO_IGNORE_HTTPS_ERRORS = process.env.PLO_IGNORE_HTTPS_ERRORS || false;
export const PLO_HEADLESS = process.env.PLO_HEADLESS || true;
export const PLO_EXECUTABLE_PATH = process.env.PLO_EXECUTABLE_PATH || undefined;
export const PLO_SLOW_MO = process.env.PLO_SLOW_MO || undefined;
export const PLO_HANDLE_SIGINT = process.env.PLO_HANDLE_SIGINT || true;
export const PLO_TIMEOUT = process.env.PLO_TIMEOUT || undefined;
export const PLO_DUMP_IO = process.env.PLO_DUMP_IO || false;
export const PLO_USER_DATA_DIR = process.env.PLO_USER_DATA_DIR || false;
export const PLO_DEV_TOOLS = process.env.PLO_DEV_TOOLS || false;

export default {
  ROOT_HREF,
  PLO_IGNORE_HTTPS_ERRORS,
  PLO_HEADLESS,
  PLO_EXECUTABLE_PATH,
  PLO_SLOW_MO,
  PLO_HANDLE_SIGINT,
  PLO_TIMEOUT,
  PLO_DUMP_IO,
  PLO_USER_DATA_DIR,
  PLO_DEV_TOOLS,
};
