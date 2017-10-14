import url from 'url';

class Page {
  constructor({ browser, page, path }) {
    this.browser = browser;
    this.page = page;
    this.href = url.resolve(process.env.ROOT_HREF, path);
  }
}

export default Page;
