import puppeteer from '../../../helpers/puppeteer';
import Home from '../Home';

let homePage;

/**
 * Initialize a new browser and page instance
 */
beforeAll(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  homePage = new Home({ browser, page });
});

/**
 * Ensure that the browser is closed
 */
afterAll(async () => {
  await homePage.browser.close();
});

describe('Home Page', () => {
  beforeAll(async () => {
    await homePage.goTo();
  });

  describe('class instance', () => {
    test('should have truthy url', () => {
      expect(homePage.href).toBeTruthy();
    });

    test('should have truthy browser and page object', () => {
      expect(homePage.browser).toBeTruthy();
      expect(homePage.page).toBeTruthy();
    });
  });
});