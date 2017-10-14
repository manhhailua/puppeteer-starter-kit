import puppeteer from 'puppeteer';
import Login from '../Login';

let browser;
let page;
let loginPage;

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

describe('<Login />', () => {
  beforeAll(() => {
    loginPage = new Login({
      browser,
      page,
      path: '/#/login',
    });
  });

  test('should have truthy url', () => {
    expect(loginPage.href).toBeTruthy();
  });

  test('should have truthy browser and page object', () => {
    expect(loginPage.browser).toBeTruthy();
    expect(loginPage.page).toBeTruthy();
  });
});