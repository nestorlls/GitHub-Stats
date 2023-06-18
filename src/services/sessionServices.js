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
  logoutSession() {
    return apiFetch('/logout', { method: 'DELETE' }).then(() => {
      sessionStorage.removeItem(TOKEN);
    });
  },
};
export default Session;
