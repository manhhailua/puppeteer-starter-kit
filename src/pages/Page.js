import url from 'url';

class Page {
  constructor({ browser, page, path }) {
    this.browser = browser;
    this.page = page;
    this.href = url.resolve(process.env.ROOT_HREF, path);
  }

  async goto(options) {
    await this.page.goto(this.href, options);
  }

  async title() {
    let title = null;

    try {
      title = await this.page.title();
    } catch (error) {
      return error;
    }

    return title;
  }
}

export default Page;
