import AuthActionTypes from './auth.types';
import axios from 'axios';

const authHeaders = {
  headers: {
    Authorization: localStorage.getItem('token') || ''
  }
}

export const loginUser = (username, password) => {
  dispatch({ type: AuthActionTypes.FETCH_USER });
  return async dispatch => {
    try {
      const result = axios.post(`${process.env.REACT_APP_TRIPS}/api/login`, { username, password });
      dispatch({ type: AuthActionTypes.FETCH_SUCCESS })
    } catch (error) {
      dispatch({ type: AuthActionTypes.ERROR, errorMesssage: error })
    }
  }
}