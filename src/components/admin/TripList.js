import React from 'react';
import { Container, ListGroup, Spinner } from 'reactstrap';
import axios from 'axios';
import Trip from './Trip';

const TripList = (props) => {
  const { dispatch } = props;
  const { loading, trips } = props.state;

  React.useEffect(() => {
    dispatch({ type: 'submit' })
    const fetchTrips = async () => {
      const token = localStorage.getItem('token');
      const requestOptions = {
        headers: {
          Authorization: token
        }
      }
      try {
        const result = await axios.get(`${process.env.REACT_APP_TRIPS}/api/trips`, requestOptions);
        dispatch({ type: 'getTrips', trips: result.data})
      } catch (error) {
        dispatch({ type: 'error', error })
      }
    }

    fetchTrips();
  }, [])

  const changeTripStatus = (status, id) => {
    
  }

  return (
    <Container>
      {loading ? <Spinner /> : (
        <ListGroup>
          {trips.map(trip => 
            <Trip key={trip.id} dispatch={dispatch} trip={trip} /> 
          )}
        </ListGroup>
      )}
    </Container>
  )
}

export default TripList;