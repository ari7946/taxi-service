import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import axios from 'axios';

const TripList = (props) => {
  const { dispatch } = props;
  const { name, startAddess, endAdress } = props.state;

  React.useEffect(() => {
    dispatch({ type: 'submit'})
    const fetchTrips = async () => {
      const token = localStorage.getItem('token');
      const requestOptions = {
        headers: {
          Authorization: token
        }
      }
      try {
        const result = await axios.get(`${process.env.REACT_APP_TRIPS}/api/trips`, requestOptions);
        console.log('result.data', result.data);
      } catch (error) {
        console.log('error 22', error)
      }
    }

    fetchTrips();
  }, [])

  return (
    <Container>
      <ListGroup>
        <div>list here</div>
      </ListGroup>
    </Container>
  )
}

export default TripList;