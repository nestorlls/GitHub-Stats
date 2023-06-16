import { TOKEN } from '../config';
import apiFetch from './apiFetch';

const Session = {
  login(credentials) {
    return apiFetch('/login', { body: credentials }).then((userData) => {
      const { token, ...user } = userData;
      sessionStorage.setItem(TOKEN, token);
      return user;
    });
  },
};
export default Session;
