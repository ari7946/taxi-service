import React from 'react';
import { Container, ListGroup, Spinner, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Trip from './Trip';
import { useAuth } from '../../auth/use-auth';

const TripList = (props) => {
  const { dispatch } = props;
  const { loading, trips } = props.state;
  let history = useHistory();
  const { logout, authHeaders } = useAuth();

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
    //dispatch({ type: 'submit' });

    try {
      const result = await axios.put(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`, 
        { status }, 
        authHeaders
      );
      getTrips();
      dispatch({ type: 'updateTrip'})
    } catch (error) {
      dispatch({ type: 'error', error})
    }
  }

  const removeTrip = async (id) => {
 
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`,
        authHeaders
      );
      getTrips();
      dispatch({ type: 'deleteTrip' })
    } catch (error) {
      dispatch({ type: 'error', error })
    }
  }

  return (
    <Container>
      {loading ? <Spinner /> : (
        <div>
          <Button
            className="float-right"
            onClick={() => {
              logout()
              history.push('/admin')
            }}
          >Logout</Button>
          <ListGroup>
            {trips.length ? trips.map(trip => 
              <Trip 
                key={trip.id} 
                dispatch={dispatch} 
                trip={trip} 
                updateTrips={updateTrips} 
                removeTrip={removeTrip} 
              /> 
            ) : (
              <p>No trips or requests pending</p>
            )}
          </ListGroup>
        </div>
      )}
    </Container>
  )
}

export default TripList;