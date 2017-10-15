import puppeteer from 'puppeteer';
import Home from '../Home';

let browser;
let page;
let homePage;

/**
 * Initialize a new browser and page instance
 */
beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

/**
 * Ensure that the browser is closed
 */
afterAll(async () => {
  await browser.close();
});

describe('<HomePage />', () => {
  beforeAll(() => {
    homePage = new Home({
      browser,
      page,
      path: '/#/',
    });
  });

  test('should have truthy url', () => {
    expect(homePage.href).toBeTruthy();
  });

  test('should have truthy browser and page object', () => {
    expect(homePage.browser).toBeTruthy();
    expect(homePage.page).toBeTruthy();
  });
});