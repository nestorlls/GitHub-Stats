import { TOKEN } from '../config';
import apiFetch from './apiFetch';

function createUser(newUserData) {
  return apiFetch('/signup', { body: newUserData }).then((userData) => {
    const { token, ...user } = userData;
    sessionStorage.setItem(TOKEN, token);
    return user;
  });
}

export { createUser };
