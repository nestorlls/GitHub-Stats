import { createContext, useContext, useEffect, useState } from 'react';
import { createUser } from '../services/userServices';
import Session from '../services/sessionServices';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  const login = (credentials) => {
    Session.login(credentials)
      .then((data) => {
        setuser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const create = (newUserData) => {
    createUser(newUserData)
      .then((data) => {
        setuser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider value={{ user, setuser, login, create }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
