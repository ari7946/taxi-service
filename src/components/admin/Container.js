import React from 'react';
import TripList from './TripList';
import Login from './Login';

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
        loading: false,
        trips: action.trips,
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
  
  return (
    <div>
      {token 
        ? <TripList state={state} dispatch={dispatch} /> 
        : <Login />
      }
    </div>
  )
}

export default Container;