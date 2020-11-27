import AuthActionTypes from './auth.types';
import axios from 'axios';

export const userAuth = (authType, username, password, name = '', email = '', phone = '') => {
  
  return async dispatch => {
    dispatch({ type: AuthActionTypes.FETCH_USER });
    try {
      const result = authType === 'login'
        ? await axios.post(`${process.env.REACT_APP_TRIPS}/api/${authType}`, { username, password })
        : await axios.post(`${process.env.REACT_APP_TRIPS}/api/${authType}`, { username, password, name, email, phone })
      const { token } = result.data;
      dispatch({ type: AuthActionTypes.FETCH_SUCCESS, token, currentUser: username })
    } catch (error) {
      dispatch({ type: AuthActionTypes.ERROR, errorMesssage: error })
    }
  }
}

export const adminLogin = (username, password, guestAdmin = false) => {
  const guestAdminUsername = process.env.REACT_APP_GUEST_USERNAME;
  const guestAdminPassword = process.env.REACT_APP_GUEST_PASSWORD;

  return async dispatch => {
    dispatch({ type: AuthActionTypes.FETCH_USER });
    // guestAdmin is Boolean value passed in from the admin login component
    try {
      const result = guestAdmin
        ? await axios.post(`${process.env.REACT_APP_TRIPS}/api/admin`, { username: guestAdminUsername, password: guestAdminPassword })
        : await axios.post(`${process.env.REACT_APP_TRIPS}/api/admin`, { username, password })
      const { token } = result.data;
      
      if (guestAdmin) 
        return dispatch({ type: AuthActionTypes.FETCH_SUCCESS, token, currentUser: guestAdminUsername });
      else 
        return dispatch({ type: AuthActionTypes.FETCH_SUCCESS, token, currentUser: username });

    } catch (error) {
      dispatch({ type: AuthActionTypes.ERROR, errorMesssage: error })
    }
  }
}

export const logout = () => {
  return { type: AuthActionTypes.LOGOUT }
}