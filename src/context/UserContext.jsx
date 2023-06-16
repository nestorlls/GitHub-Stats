import { createContext, useContext, useEffect, useState } from 'react';
import { createUser, getUser } from '../services/userServices';
import Session from '../services/sessionServices';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser().then((data) => {
      setUser(data);
    });
  }, []);

  const login = (credentials) => {
    Session.login(credentials)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  const create = (newUserData) => {
    createUser(newUserData)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider value={{ user, error, setUser, login, create }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
