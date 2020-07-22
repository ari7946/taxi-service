import React, { Fragment } from 'react';
import Trip from './user-trip.component';
import './user.styles.css';

const TripList = (props) => {
  return (
    <Fragment>
    {props.trips && props.trips.map(trip => (
      <Trip 
        key={trip.id}
        trip={trip}
      />
    ))}
    </Fragment>
  )
}

export default TripList;