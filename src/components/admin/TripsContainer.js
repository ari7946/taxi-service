import React, { Fragment } from 'react';
import TripList from './TripList';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../auth/use-auth';
import './adminStyle.css';
import TripsReducer from './TripsReducer';

function Container() {
  const initialState = {
    trips: [],
    loading: false,
    error: '',
  }
  const [state, dispatch] = React.useReducer(TripsReducer, initialState);
  const { auth } = useAuth();

  return (
    <Fragment>
      {auth 
        ? <TripList state={state} dispatch={dispatch} /> 
        : (
          <div className="container">
            <h3 className="text-green-light mb-3">Login required to view trips</h3>
            <Link className="btn px-4 btn-light" to="/admin">Login</Link>
          </div>
        )
      }
    </Fragment>
  )
}

export default Container;