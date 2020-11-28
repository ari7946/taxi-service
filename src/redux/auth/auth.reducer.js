import TripActionTypes from './auth.types';

const INITIAL_STATE = {
  currentUser: '',
  token: '',
  loading: false,
  errorMessage: '',
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TripActionTypes.FETCH_USER:
      return {
        ...state,
        loading: true,
        errorMessage: '',
      }
    case TripActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: '',
        currentUser: action.currentUser,
        token: action.token,
      }
    case TripActionTypes.ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      }
    case TripActionTypes.LOGOUT:
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

