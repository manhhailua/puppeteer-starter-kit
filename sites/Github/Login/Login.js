import GithubPage from '../GithubPage';

class Login extends GithubPage {
  constructor(object) {
    object.path = object.path || '/login';
    super(object);
  }
}

export default Login;
