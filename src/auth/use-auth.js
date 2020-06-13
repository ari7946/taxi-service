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

  const isAuth = () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (!token || !username) {
      return '';
    } else if (username === 'admin') {
      return 'admin';
    } else if (username !== 'admin') {
      return 'user';
    } else {
      return ''
    }
  }

  const [auth, setAuth] = useState(isAuth());

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
      let role = localStorage.getItem('username') || false;
      let token = localStorage.getItem('token') || false;
      if (!token || !role) {
        setAuth('');
      } else if (token && role === 'admin') {
        setAuth('admin');
      } else if (token && role !== 'admin') {
        setAuth('user')
      } else {
        setAuth('')
      }
    }

    return () => unsubscribe();
  }, [auth]);

  return {
    auth,
    logout,
    authHeaders,
    adminLogin,
    userLogin,
    userRegister,
  }

}