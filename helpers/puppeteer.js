import puppeteer from 'puppeteer';
import configuration from './configuration';
import { toBoolean } from './dataTypes';

export async function launch(
  options = {},
  env = configuration,
  puppeteerInstance = puppeteer,
) {
  const opts = { ...options };

  if (typeof opts.ignoreHTTPSErrors === 'undefined') {
    opts.ignoreHTTPSErrors = toBoolean(env.PLO_IGNORE_HTTPS_ERRORS);
  }

  if (typeof opts.headless === 'undefined') {
    opts.headless = toBoolean(env.PLO_HEADLESS);
  }

  if (typeof opts.executablePath === 'undefined') {
    opts.executablePath = env.PLO_EXECUTABLE_PATH;
  }

  if (typeof opts.slowMo === 'undefined') {
    opts.slowMo = env.PLO_SLOW_MO;
  }

  if (typeof opts.handleSIGINT === 'undefined') {
    opts.handleSIGINT = toBoolean(env.PLO_HANDLE_SIGINT);
  }

  if (typeof opts.timeout === 'undefined') {
    opts.timeout = env.PLO_TIMEOUT;
  }

  if (typeof opts.dumpio === 'undefined') {
    opts.dumpio = toBoolean(env.PLO_DUMP_IO);
  }

  if (typeof opts.userDataDir === 'undefined') {
    opts.userDataDir = toBoolean(env.PLO_USER_DATA_DIR);
  }

  if (typeof opts.devtools === 'undefined') {
    opts.devtools = toBoolean(env.PLO_DEV_TOOLS);
  }

  return await puppeteerInstance.launch(opts);
}

export default {
  launch,
};
