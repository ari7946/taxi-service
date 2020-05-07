import React from 'react';
import TripList from './TripList';
import Login from './Login';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../auth/use-auth';

function reducer(state, action) {
  switch(action.type) {
    case 'submit':
      return {
        ...state,
        loading: true,
      }
    case 'getTrips':
      return {
        ...state,
        loading: false,
        trips: action.trips,
      }
    case 'updateTrip':
      return {
        ...state,
        loading: false
      }
    case 'deleteTrip':
      return {
        ...state,
        loading: false
      }
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default: return state;
  }
}

const initialState = {
  trips: [],
  loading: false,
  error: '',
}

function Container() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const token = localStorage.getItem('token');
  let history = useHistory();
  const auth = useAuth();
  if (!token) return history.goBack();

  return (
    <div>
      {auth 
        ? <TripList state={state} dispatch={dispatch} /> 
        : <Link to="/login">Signin</Link>
      }
    </div>
  )
}

export default Container;