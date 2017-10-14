class Page {
  constructor({
    href,
  }) {
    this.href = href || process.env.ROOT_HREF;
  }
}

export default Page;
