import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge, Spinner } from 'reactstrap';
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
        // console.log('result.data', result.data);
      } catch (error) {
        dispatch({ type: 'error', error })
      }
    }

    fetchTrips();
  }, [])

  console.log('state', props.state.trips)
  return (
    <Container>
      {loading ? <Spinner /> : (
        <ListGroup>
          {trips.map(trip => {
            <Trip key={trip.id} {...props} />
          })}
        </ListGroup>
      )}
    </Container>
  )
}

export default TripList;