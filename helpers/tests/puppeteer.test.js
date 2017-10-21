import puppeteer from '../puppeteer';

describe('puppeteer helpers', () => {
  describe('.launch()', () => {
    test('should return a truthy Chromium instance without any param', async () => {
      const browser = await puppeteer.launch();
      expect(browser).toBeTruthy();
      await browser.close();
    });
  });
});