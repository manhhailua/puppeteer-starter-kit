import GithubPage from '../GithubPage';

class Home extends GithubPage {
  constructor(object) {
    object.path = object.path || '/';
    super(object);
  }
}

export default Home;
