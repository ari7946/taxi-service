import React, { Fragment } from 'react';
import Trip from './UserTrip';

const TripList = (props) => {
  return (
    <Fragment>
    {props.trips.map(trip => (
      <Trip 
        key={trip.id}
        trip={trip}
      />
    ))}
    </Fragment>
  )
}

export default TripList;