import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge, Spinner } from 'reactstrap';
import axios from 'axios';

const Trip = (props) => {
  const { trip, dispatch } = props;
  console.log('trip', trip);
  
  return (
    <ListGroupItem>
      <p>{props.trip.name}</p>
    </ListGroupItem>
  )
}

export default Trip;