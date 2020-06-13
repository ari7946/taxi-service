////////// Implementation guided by this resource https://usehooks.com/useAuth/
import React, { useState, useEffect, useContext, createContext } from 'react';
const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [auth, setAuth] = useState('');

  const adminLogin = (token, username) => {
    if (username && username === 'admin') {
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      setAuth('admin');
    } else {
      setAuth('')
    }
  }

  const userLogin = (token, username) => {
    if (username && username !== 'admin') {
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      setAuth('user');
    } else {
      setAuth('')
    }
  }

  const userRegister = (token, username) => {
    if (username && username !== 'admin') {
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      setAuth('user');
    } else {
      setAuth('')
    }
  }
  
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setAuth('')
  };

  const authHeaders = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }
  
  useEffect(() => {
    const unsubscribe = () => { 
      let role = localStorage.getItem('username') === 'admin' ? 'admin' : 'user';
      let validToken = localStorage.getItem('token') || '';
      if (!validToken) {
        setAuth('');
      } else if (validToken && role === 'admin') {
        setAuth('admin');
      } else if (validToken && role === 'user') {
        setAuth('user')
      } else {
        setAuth('')
      }
    }

    return () => unsubscribe();
    }, [auth]);

  return {
    auth,
    adminLogin,
    logout,
    userLogin,
    userRegister,
    authHeaders,
  }

}