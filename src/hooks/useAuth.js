/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useMemo, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        (async () => {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        })();
      } catch (err) {
        console.log(err.message);
      }
    }
  }, []);

  const signIn = async (data) => {
    try {
      const response = await axios.post('/login', {
        login: data.login,
        password: data.password,
      });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      console.log(err.message);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return <AuthContext.Provider value={useMemo(() => ({ user, signIn, signOut }), [user])}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return auth;
};
