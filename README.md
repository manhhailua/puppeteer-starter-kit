## Puppeteer Starter Kit [![Build Status](https://travis-ci.org/manhhailua/puppeteer-starter-kit.svg?branch=master)](https://travis-ci.org/manhhailua/puppeteer-starter-kit)

#### Start your UI tests without headache

Created by [Manhhailua](https://github.com/manhhailua) with :heart:.

## Stack

* [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* [Jest](https://facebook.github.io/jest/)

## Prerequisites

#### ENV variables

| Name | Usage | Type | Required? |
|---|---|---|---|
| **ROOT_HREF** | Root href of targeted site | String | Yes |
| TIMEOUT | Timeout for jest to wait on an action. Defaults to `30000` ms. | Number | No |
| PLO_IGNORE_HTTPS_ERRORS | Whether to ignore HTTPS errors during navigation. Defaults to `false`. | Boolean | No |
| PLO_HEADLESS | Whether to run Chromium in headless mode. Defaults to `true` unless the `devtools` option is `true`. | Boolean | No |
| PLO_EXECUTABLE_PATH | Path to a Chromium executable to run instead of bundled Chromium. If executablePath is a relative path, then it is resolved relative to [current working directory](https://nodejs.org/api/process.html#process_process_cwd) . | String | No |
| PLO_SLOW_MO | Slows down Puppeteer operations by the specified amount of milliseconds. Useful so that you can see what is going on. | Number | No |
| PLO_HANDLE_SIGINT | Close chrome process on Ctrl-C. Defaults to `true`. | Boolean | No |
| PLO_TIMEOUT | Maximum time in milliseconds to wait for the Chrome instance to start. Defaults to `30000` (30 seconds). Pass `0` to disable timeout. | Number | No |
| PLO_DUMP_IO | Whether to pipe browser process stdout and stderr into `process.stdout` and `process.stderr`. Defaults to `false`. | Boolean | No |
| PLO_USER_DATA_DIR | Path to a [User Data Directory](https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md) . | String | No |
| PLO_DEV_TOOLS | Whether to auto-open DevTools panel for each tab. If this option is `true`, the `headless` option will be set `false`. | Boolean | No |

All prefixed by `PLO_` ENV variables will be passed to [corresponding named options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)  param of `puppeteer.launch()`. Puppeteer launch options ENV variables can be override by hard coded options. Example:

```
puppeteer.launch({
  headless: false, // This overrides PLO_HEADLESS=true
});
```

Also check [Puppeteer's ENV variables](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#environment-variables) for more.

#### `.env` file

For development, writing down all the ENV variables every commands is really painful. [dotenv](https://github.com/bkeepers/dotenv) is implemented so that you are able to create a `.env` file with content similar to below:

```
ROOT_HREF=https://github.com/
PLO_IGNORE_HTTPS_ERRORS=false
PLO_HEADLESS=true
```

## Getting started

Comprehensive test:

```
npm test
PLO_HEADLESS=false npm test # Not recommended
```

For UI pages tests only:

```
npm run test:pages
```

For helpers tests only:

```
npm run test:helpers
```

Run a specific test suite with headless mode off:

```
PLO_HEADLESS=false npm test -- pages/Home/tests/Home.test.js
```