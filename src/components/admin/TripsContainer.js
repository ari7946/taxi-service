import React from 'react';
import TripList from './TripList';
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
      const updatedTrip = action.trip;
      const updatedTrips = state.trips.map(trip => {
        if (trip.id === updatedTrip.id) {
          return updatedTrip;
        }
        return trip
      })
      return {
        ...state,
        loading: false,
        trips: updatedTrips,
      }
    case 'deleteTrip':
      const filteredTrips = state.trips.filter(trip => trip.id !== action.trip.id)
      return {
        ...state,
        loading: false,
        trips: filteredTrips,
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
  const { auth } = useAuth();

  return (
    <div>
      {auth 
        ? <TripList state={state} dispatch={dispatch} /> 
        : <div className="container">
          <h3 className="text-green-light mb-3">Login required to view trips</h3>
          <Link className="btn px-4 btn-light" to="/admin">Login</Link>
        </div>
      }
    </div>
  )
}

export default Container;