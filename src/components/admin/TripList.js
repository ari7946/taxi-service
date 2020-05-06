import React from 'react';
import { Container, ListGroup, Spinner, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Trip from './Trip';

const TripList = (props) => {
  const { dispatch } = props;
  const { loading, trips } = props.state;
  let history = useHistory();

  React.useEffect(() => {
    getTrips();
  }, [])

  const getTrips = async () => {
    dispatch({ type: 'submit' })
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: {
        Authorization: token
      }
    }
    try {
      const result = await axios.get(`${process.env.REACT_APP_TRIPS}/api/trips`, requestOptions);
      dispatch({ type: 'getTrips', trips: result.data })
    } catch (error) {
      dispatch({ type: 'error', error })
    }
  }

  const updateTrips = async (status, id) => {
    //dispatch({ type: 'submit' });
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: {
        Authorization: token
      }
    }
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`, 
        { status }, 
        requestOptions
      );
      getTrips();
      dispatch({ type: 'updateTrip'})
    } catch (error) {
      dispatch({ type: 'error', error})
    }
  }

  const removeTrip = async (id) => {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: {
        Authorization: token
      }
    }
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`,
        requestOptions
      );
      getTrips();
      dispatch({ type: 'deleteTrip' })
    } catch (error) {
      dispatch({ type: 'error', error })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/admin');
  }

  return (
    <Container>
      {loading ? <Spinner /> : (
        <div>
          <Button
            className="float-right"
            onClick={() => handleLogout()}
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