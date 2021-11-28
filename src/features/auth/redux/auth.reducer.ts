import { AuthActionTypes } from '../types/auth.types';

interface AuthState {
  currentUser: string,
  token: string,
  loading: boolean,
  errorMessage: string
}

const INITIAL_STATE: AuthState = {
  currentUser: '',
  token: '',
  loading: false,
  errorMessage: '',
}

const authReducer = (state = INITIAL_STATE, action): AuthState => {
  switch (action.type) {
    case AuthActionTypes.FETCH_USER:
      return {
        ...state,
        loading: true,
        errorMessage: '',
      }
    case AuthActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: '',
        currentUser: action.currentUser,
        token: action.token,
      }
    case AuthActionTypes.ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      }
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        currentUser: '',
        token: '',
        loading: false,
        errorMessage: '',
      }
    default:
      return state;
  }
}

export default authReducer;

