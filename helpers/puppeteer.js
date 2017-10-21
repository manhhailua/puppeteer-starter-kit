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
    opts.ignoreHTTPSErrors = toBoolean(env.PO_IGNORE_HTTPS_ERRORS);
  }

  if (typeof opts.headless === 'undefined') {
    opts.headless = toBoolean(env.PO_HEADLESS);
  }

  if (typeof opts.handleSIGINT === 'undefined') {
    opts.handleSIGINT = toBoolean(env.PO_HANDLE_SIGINT);
  }

  if (typeof opts.dumpio === 'undefined') {
    opts.dumpio = toBoolean(env.PO_DUMP_IO);
  }

  if (typeof opts.devtools === 'undefined') {
    opts.devtools = toBoolean(env.PO_DEV_TOOLS);
  }

  return await puppeteerInstance.launch(opts);
}

export default {
  launch,
};
