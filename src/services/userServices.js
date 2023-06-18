import { TOKEN } from '../config';
import apiFetch from './apiFetch';

function createUser(newUserData) {
  return apiFetch('/signup', { body: newUserData }).then((userData) => {
    const { token, ...user } = userData;
    sessionStorage.setItem(TOKEN, token);
    return user;
  });
}

function getUser() {
  return apiFetch('/profile').then((userData) => {
    const { token, ...user } = userData;
    return user;
  });
}

function updateUser(updateData) {
  return apiFetch('/profile', { method: 'PATCH', body: updateData }).then(
    (userData) => {
      const { token, ...user } = userData;
      window.location.reload();
      return user;
    }
  );
}

export { createUser, getUser, updateUser };
