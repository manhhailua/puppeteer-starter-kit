import puppeteer from 'puppeteer';
import configuration from './configuration';
import { toBoolean } from './dataTypes';

export async function launch(
  options = {},
  env = configuration,
  puppeteerInstance = puppeteer,
) {
  if (typeof options.ignoreHTTPSErrors === 'undefined') {
    options.ignoreHTTPSErrors = toBoolean(env.PO_IGNORE_HTTPS_ERRORS);
  }

  if (typeof options.headless === 'undefined') {
    options.headless = toBoolean(env.PO_HEADLESS);
  }

  if (typeof options.handleSIGINT === 'undefined') {
    options.handleSIGINT = toBoolean(env.PO_HANDLE_SIGINT);
  }

  if (typeof options.dumpio === 'undefined') {
    options.dumpio = toBoolean(env.PO_DUMP_IO);
  }

  if (typeof options.devtools === 'undefined') {
    options.devtools = toBoolean(env.PO_DEV_TOOLS);
  }

  return await puppeteerInstance.launch(options);
}

export default {
  launch,
};
