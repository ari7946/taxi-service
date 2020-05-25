import React from 'react';
import { Container, ListGroup, Spinner } from 'reactstrap';
import axios from 'axios';
import Trip from './Trip';
import { useAuth } from '../../auth/use-auth';
import { useTripsApi } from './TripsApi';

const TripList = (props) => {
  const { state } = useTripsApi();

  return (
    <Container fluid>
      {state.loading 
        ? <Spinner color="light" />
        : state.trips.length > 0 ? (
          <ListGroup>
            {state.trips.map(trip =>
              <Trip
                key={trip.id}
                // dispatch={dispatch}
                trip={trip}
                // updateTrips={updateTrips}
                // removeTrip={removeTrip}
              />
            )}
          </ListGroup>
        ) : (
          <h4 className="text-green-light">There's currently no trips pending or requested.</h4>
        )
      }
    </Container>
  )
}

export default TripList;