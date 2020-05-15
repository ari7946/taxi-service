import React from 'react';
import { Container, ListGroup, Spinner, Button } from 'reactstrap';
import axios from 'axios';
import Trip from './Trip';
import { useAuth } from '../../auth/use-auth';

const TripList = (props) => {
  const { dispatch } = props;
  const { loading, trips } = props.state;
  const { authHeaders } = useAuth();

  React.useEffect(() => {
    getTrips();
  }, [])

  const getTrips = async () => {
    dispatch({ type: 'submit' })
    try {
      const result = await axios.get(`${process.env.REACT_APP_TRIPS}/api/trips`, authHeaders);
      dispatch({ type: 'getTrips', trips: result.data })
    } catch (error) {
      dispatch({ type: 'error', error })
    }
  }

  const updateTrips = async (status, id) => {
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`, 
        { status }, 
        authHeaders
      );
      dispatch({ type: 'updateTrip', trip: result.data })
    } catch (error) {
      dispatch({ type: 'error', error })
    }
  }

  const removeTrip = async (id) => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`,
        authHeaders
      );
      dispatch({ type: 'deleteTrip', trip: result.data.removedTrip })
    } catch (error) {
      dispatch({ type: 'error', error })
    }
  }

  return (
    <Container fluid>
      {loading 
        ? <Spinner color="light" />
        : trips.length > 0 ? (
          <ListGroup>
            {trips.map(trip =>
              <Trip
                key={trip.id}
                dispatch={dispatch}
                trip={trip}
                updateTrips={updateTrips}
                removeTrip={removeTrip}
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