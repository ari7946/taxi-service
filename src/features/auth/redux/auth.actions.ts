import  { AuthActionTypes, FetchUser, FetchSuccess, Error, Logout } from '../types/auth.types';
import axios from 'axios';
import { Dispatch } from 'react';

type AuthType = 'login' | 'register'

export const userAuth = (authType: AuthType, username: string, password: string, name = '', email = '', phone = '') => {

  return async (dispatch: Dispatch<FetchUser | FetchSuccess | Error>) => {
    dispatch({ type: AuthActionTypes.FETCH_USER });
    try {
      const result = authType === 'login'
        ? await axios.post(`${process.env.REACT_APP_TRIPS}/api/${authType}`, { username, password })
        // for user registration, "name", "email", and "phone" are not required. If
        // excluded, they default to empty strings
        : await axios.post(`${process.env.REACT_APP_TRIPS}/api/${authType}`, { username, password, name, email, phone })
      const { token } = result.data;
      dispatch({ 
        type: AuthActionTypes.FETCH_SUCCESS, 
        payload: { token, currentUser: username }
      })
    } catch (error) {
      dispatch({ 
        type: AuthActionTypes.ERROR,
        payload: { errorMessage: "Unable to login or register" }
      })
    }
  }
}

export const adminLogin = (
  { 
    username, 
    password, 
    guestAdmin = false 
  } : { 
    username: string, 
    password: string, 
    guestAdmin: boolean
  }
) => {
  const guestAdminUsername = process.env.REACT_APP_GUEST_USERNAME;
  const guestAdminPassword = process.env.REACT_APP_GUEST_PASSWORD;

  return async (dispatch: Dispatch<FetchUser | FetchSuccess | Error>) => {
    dispatch({ type: AuthActionTypes.FETCH_USER });
    // guestAdmin is a Boolean value passed in from the admin login component
    try {
      const result = guestAdmin
        ? await axios.post(`${process.env.REACT_APP_TRIPS}/api/admin`, { username: guestAdminUsername, password: guestAdminPassword })
        : await axios.post(`${process.env.REACT_APP_TRIPS}/api/admin`, { username, password })
      const { token } = result.data;
      
      if (guestAdmin) 
        return dispatch({ 
          type: AuthActionTypes.FETCH_SUCCESS, 
          payload: { token, currentUser: guestAdminUsername }
        });
      else 
        return dispatch({ 
          type: AuthActionTypes.FETCH_SUCCESS, 
          payload: { token, currentUser: username  }
        });

    } catch (error) {
      dispatch({ 
        type: AuthActionTypes.ERROR, 
        payload: {errorMessage: "Unable to login admin" }
      })
    }
  }
}

export const logout = (): Logout => ({
  type: AuthActionTypes.LOGOUT 
})