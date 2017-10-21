export const PO_IGNORE_HTTPS_ERRORS = process.env.PO_IGNORE_HTTPS_ERRORS || false;
export const PO_HEADLESS = process.env.PO_HEADLESS || true;
export const PO_HANDLE_SIGINT = process.env.PO_HANDLE_SIGINT || true;
export const PO_DUMP_IO = process.env.PO_DUMP_IO || false;
export const PO_DEV_TOOLS = process.env.PO_DEV_TOOLS || false;

export const ROOT_HREF = process.env.ROOT_HREF;
export const MS_LOGIN_HREF = process.env.MS_LOGIN_HREF;
export const MS_LOGIN_USER_ID = process.env.MS_LOGIN_USER_ID;
export const MS_LOGIN_USER_PASSWORD = process.env.MS_LOGIN_USER_PASSWORD;

export default {
  PO_IGNORE_HTTPS_ERRORS,
  PO_HEADLESS,
  PO_HANDLE_SIGINT,
  PO_DUMP_IO,
  PO_DEV_TOOLS,
  ROOT_HREF,
  MS_LOGIN_HREF,
  MS_LOGIN_USER_ID,
  MS_LOGIN_USER_PASSWORD,
};
