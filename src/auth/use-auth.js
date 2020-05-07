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
  const [auth, setAuth] = useState(false);

  const login = (token) => {
    localStorage.setItem('token', token);
    setAuth(true);
  }
  
  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false)
  };

  const authHeaders = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }
  
  useEffect(() => {
    const unsubscribe = () => { 
      if (localStorage.getItem('token')) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    }

    return () => unsubscribe();
    }, [auth]);

  return {
    auth,
    login,
    logout,
    authHeaders,
  }

}