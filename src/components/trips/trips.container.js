import React, { Fragment } from 'react';
import TripList from './trip-list/trip-list.component';
import { useAuth } from '../../auth/use-auth';
import './trips.styles.css';

function TripContainer() {
  const { auth } = useAuth();

  return (
    <Fragment>
      {auth !== 'user' && auth !== 'admin' && <h3 className="text-green-light mb-3">Login required to view trips</h3>}
      {auth === 'user' || auth === 'admin' ? (
        <TripList />
      ) : null}
    </Fragment>
  )
}

export default TripContainer;