import url from 'url';
import Page from 'sites/Page';

class GithubPage extends Page {
  constructor({ path, ...rest }) {
    super(rest);
    this.href = url.resolve(process.env.ROOT_HREF, path);
  }

  async goTo(options) {
    await this.page.goto(this.href, options);
  }
}

export default GithubPage;
