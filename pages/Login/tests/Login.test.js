import puppeteer from '../../../helpers/puppeteer';
import Login from '../Login';

let loginPage;

/**
 * Initialize a new browser and page instance
 */
beforeAll(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  loginPage = new Login({ browser, page });
});

/**
 * Ensure that the browser is closed
 */
afterAll(async () => {
  await loginPage.browser.close();
});

describe('Login Page', () => {
  beforeAll(async () => {
    await loginPage.goTo();
  });

  describe('class instance', () => {
    test('should have truthy url', () => {
      expect(loginPage.href).toBeTruthy();
    });

    test('should have truthy browser and page object', () => {
      expect(loginPage.browser).toBeTruthy();
      expect(loginPage.page).toBeTruthy();
    });
  });
});