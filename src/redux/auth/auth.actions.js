import AuthActionTypes from './auth.types';
import axios from 'axios';

const authHeaders = {
  headers: {
    Authorization: localStorage.getItem('token') || ''
  }
}

export const userLogin = (username, password) => {
  return async dispatch => {
    dispatch({ type: AuthActionTypes.FETCH_USER });
    try {
      const result = await axios.post(`${process.env.REACT_APP_TRIPS}/api/login`, { username, password });
      console.log('result', result.data.token);
      const { token } = result.data;
      // localStorage.setItem('token', token);
      // localStorage.setItem('username', username);
      dispatch({ type: AuthActionTypes.FETCH_SUCCESS, token, currentUser: username })
    } catch (error) {
      dispatch({ type: AuthActionTypes.ERROR, errorMesssage: error })
    }
  }
}

export const logout = () => {
  return { type: AuthActionTypes.LOGOUT }
}